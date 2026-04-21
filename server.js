const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const {
  navLinks,
  pages,
  legalPages,
  blogPosts,
  seoLandingPaths
} = require("./data/site-data");

const app = express();
const port = process.env.PORT || 4173;
const host = process.env.HOST || "0.0.0.0";
const siteUrl = (process.env.SITE_URL || `http://127.0.0.1:${port}`).replace(/\/$/, "");
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailTo = process.env.CONTACT_TO_EMAIL || "sandrinemundweiler@gmail.com";
const mailFrom = process.env.SMTP_FROM_EMAIL || smtpUser;
const isMailConfigured = Boolean(smtpHost && smtpUser && smtpPass && mailFrom);

let transporter;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "assets")));

const legacyPathMap = {
  "/index.html": "/",
  "/a-propos.html": "/a-propos",
  "/approches-therapeutiques.html": "/approches-therapeutiques",
  "/experience-formation.html": "/experience-formation",
  "/contact.html": "/contact",
  "/therapie-traumatisme-lyon.html": "/therapie-traumatisme-lyon",
  "/burn-out-lyon.html": "/burn-out-lyon",
  "/gestion-stress-lyon.html": "/gestion-stress-lyon",
  "/mentions-legales.html": "/mentions-legales",
  "/politique-confidentialite.html": "/politique-confidentialite",
  "/politique-cookies.html": "/politique-cookies",
  "/blog/index.html": "/blog",
  "/blog/comment-le-corps-exprime-l-anxiete.html": "/blog/comment-le-corps-exprime-l-anxiete",
  "/blog/sortir-du-mode-survie-apres-burnout.html": "/blog/sortir-du-mode-survie-apres-burnout"
};

app.use((req, res, next) => {
  const normalized = req.path.toLowerCase();
  if (legacyPathMap[normalized]) {
    return res.redirect(301, legacyPathMap[normalized]);
  }

  return next();
});

function baseViewData(activePath) {
  return {
    navLinks,
    activePath,
    year: new Date().getFullYear(),
    canonicalBase: siteUrl
  };
}

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });
  }

  return transporter;
}

async function sendContactEmail({ name, email, message }) {
  if (!isMailConfigured) {
    throw new Error("MAIL_NOT_CONFIGURED");
  }

  const subject = `Nouveau message du site - ${name}`;
  const text = [
    "Nouveau message depuis le formulaire de contact.",
    "",
    `Nom: ${name}`,
    `E-mail: ${email}`,
    "",
    "Message:",
    message
  ].join("\n");

  await getTransporter().sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    text
  });
}

app.get("/", (req, res) => {
  res.render("pages/home", {
    ...baseViewData("/"),
    title: "Therapie psychocorporelle a Lyon 6 - Sandrine Mundweiler",
    description:
      "Sandrine Mundweiler, psycho-praticienne en therapie psychocorporelle a Lyon 6. Accompagnement adulte: anxiete, stress, burn-out, deuil.",
    seoCards: [
      {
        title: "Anxiete, stress, angoisse",
        text: "Regulation emotionnelle progressive et travail d'ancrage corporel.",
        href: "/gestion-stress-lyon"
      },
      {
        title: "Burn-out",
        text: "Sortir du mode survie et retrouver un rythme de vie soutenable.",
        href: "/burn-out-lyon"
      },
      {
        title: "Traumatisme",
        text: "Apaiser l'hypervigilance et restaurer un sentiment de securite interne.",
        href: "/therapie-traumatisme-lyon"
      }
    ]
  });
});

Object.values(pages).forEach((page) => {
  app.get(page.path, (req, res) => {
    res.render("pages/text-page", {
      ...baseViewData(page.path),
      ...page
    });
  });
});

Object.values(legalPages).forEach((page) => {
  app.get(page.path, (req, res) => {
    res.render("pages/text-page", {
      ...baseViewData(page.path),
      ...page
    });
  });
});

app.get("/contact", (req, res) => {
  const sent = req.query.sent === "1";
  res.render("pages/contact", {
    ...baseViewData("/contact"),
    title: "Contact - Cabinet de therapie psychocorporelle a Lyon 6",
    description:
      "Contactez Sandrine Mundweiler, psycho-praticienne a Lyon 6: telephone, e-mail, adresse du cabinet.",
    sent,
    formData: {
      name: "",
      email: "",
      message: ""
    }
  });
});

app.post("/contact", async (req, res) => {
  const name = (req.body.name || "").trim();
  const email = (req.body.email || "").trim();
  const message = (req.body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).render("pages/contact", {
      ...baseViewData("/contact"),
      title: "Contact - Cabinet de therapie psychocorporelle a Lyon 6",
      description:
        "Contactez Sandrine Mundweiler, psycho-praticienne a Lyon 6: telephone, e-mail, adresse du cabinet.",
      sent: false,
      error: "Merci de remplir tous les champs du formulaire.",
      formData: { name, email, message }
    });
  }

  try {
    await sendContactEmail({ name, email, message });
  } catch (error) {
    const userError =
      error.message === "MAIL_NOT_CONFIGURED"
        ? "Le service e-mail n'est pas encore configure."
        : "L'envoi du message a echoue. Merci de reessayer.";

    return res.status(500).render("pages/contact", {
      ...baseViewData("/contact"),
      title: "Contact - Cabinet de therapie psychocorporelle a Lyon 6",
      description:
        "Contactez Sandrine Mundweiler, psycho-praticienne a Lyon 6: telephone, e-mail, adresse du cabinet.",
      sent: false,
      error: userError,
      formData: { name, email, message }
    });
  }

  return res.redirect("/contact?sent=1");
});

app.get("/blog", (req, res) => {
  res.render("pages/blog-index", {
    ...baseViewData("/blog"),
    title: "Blog - Therapie psychocorporelle a Lyon",
    description:
      "Articles sur l'anxiete, le stress, le burn-out et les approches psychocorporelles.",
    posts: blogPosts
  });
});

app.get("/blog/:slug", (req, res) => {
  const post = blogPosts.find((item) => item.slug === req.params.slug);
  if (!post) {
    return res.status(404).render("pages/not-found", {
      ...baseViewData(""),
      title: "Page non trouvee",
      description: "La page demandee est introuvable."
    });
  }

  return res.render("pages/blog-post", {
    ...baseViewData("/blog"),
    title: `${post.title} | Blog`,
    description: post.excerpt,
    post
  });
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
});

app.get("/sitemap.xml", (req, res) => {
  const staticPaths = [
    "/",
    "/a-propos",
    "/approches-therapeutiques",
    "/experience-formation",
    "/contact",
    "/blog",
    "/mentions-legales",
    "/politique-confidentialite",
    "/politique-cookies",
    ...seoLandingPaths
  ];
  const postPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  const allPaths = [...staticPaths, ...postPaths];

  const urls = allPaths
    .map((entry) => `  <url><loc>${siteUrl}${entry}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  res.type("application/xml");
  res.send(xml);
});

app.use((req, res) => {
  res.status(404).render("pages/not-found", {
    ...baseViewData(""),
    title: "Page non trouvee",
    description: "La page demandee est introuvable."
  });
});

app.listen(port, host, () => {
  console.log(`Serveur demarre sur ${siteUrl} (ecoute ${host}:${port})`);
});
