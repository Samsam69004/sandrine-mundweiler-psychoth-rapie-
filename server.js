const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const validator = require("validator");
const path = require("path");
const {
  navLinks,
  pages,
  legalPages,
  blogPosts,
  seoLandingPaths,
  cabinet
} = require("./data/site-data");

const app = express();
const port = process.env.PORT || 4173;
const host = process.env.HOST || "0.0.0.0";
const siteUrl = (process.env.SITE_URL || `http://127.0.0.1:${port}`).replace(/\/$/, "");
const backgroundArtPath = path.join(__dirname, "assets", "images", "background.jpg");
const backgroundArtDataUri = fs.existsSync(backgroundArtPath)
  ? `data:image/jpeg;base64,${fs.readFileSync(backgroundArtPath).toString("base64")}`
  : "";
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

// Indispensable pour que Express récupère l'IP réelle derrière Vercel ou un proxy
app.set("trust proxy", 1);

// Security middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "'unsafe-inline'"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "font-src": ["'self'"],
        "img-src": ["'self'", "data:"],
        "frame-src": ["'self'", "https://www.google.com", "https://maps.google.com"],
      },
    },
  })
);

// Simple rate limiter for contact form to mitigate spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false
});

const legacyPathMap = {
  "/index.html": "/",
  "/a-propos.html": "/a-propos",
  "/approches-therapeutiques.html": "/approches-therapeutiques",
  "/experience-formation.html": "/experience-formation",
  "/contact.html": "/contact",
  "/faq.html": "/faq",
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

function getCanonicalBase(req) {
  return siteUrl;
}

function viewData(activePath, req) {
  return {
    ...baseViewData(activePath),
    backgroundArtDataUri,
    canonicalBase: getCanonicalBase(req),
    cabinet,
    bodyClass: activePath === "/" ? "home-page" : "page-internal"
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
    ...viewData("/", req),
    title: "Sandrine Mundweiler | Psychothérapie et Thérapie Psychocorporelle Lyon 6",
    description:
      "Sandrine Mundweiler, psycho-praticienne à Lyon 6. Spécialisée en psychothérapie et thérapie psychocorporelle (APSYSE) pour la gestion du stress, burn-out et traumatismes.",
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
      ...viewData(page.path, req),
      ...page
    });
  });
});

Object.values(legalPages).forEach((page) => {
  app.get(page.path, (req, res) => {
    res.render("pages/text-page", {
      ...viewData(page.path, req),
      ...page
    });
  });
});

app.get("/contact", (req, res) => {
  const sent = req.query.sent === "1";
  res.render("pages/contact", {
    ...viewData("/contact", req),
    title: "Me contacter - Sandrine Mundweiler | Psychothérapie Lyon 6",
    description:
      "Me contacter : Sandrine Mundweiler, psycho-praticienne à Lyon 6. Téléphone, e-mail et adresse du cabinet.",
    sent,
    error: null,
    formData: {
      name: "",
      email: "",
      message: ""
    }
  });
});

app.post("/contact", contactLimiter, async (req, res) => {
  // Basic sanitization and validation
  let name = (req.body.name || "").trim().slice(0, 200);
  let email = (req.body.email || "").trim().slice(0, 200);
  let message = (req.body.message || "").trim().slice(0, 2000);
  const privacyConsent = req.body.privacyConsent === "yes";

  // Prevent header injection via CRLF
  name = name.replace(/[\r\n]/g, " ");
  email = email.replace(/[\r\n]/g, " ");

  if (!name || !email || !message) {
    return res.status(400).render("pages/contact", {
      ...viewData("/contact", req),
      title: "Me contacter - Sandrine Mundweiler | Psychothérapie Lyon 6",
      description:
        "Me contacter : Sandrine Mundweiler, psycho-praticienne à Lyon 6. Téléphone, e-mail et adresse du cabinet.",
      sent: false,
      error: "Merci de remplir tous les champs du formulaire.",
      formData: { name, email, message }
    });
  }

  if (!privacyConsent) {
    return res.status(400).render("pages/contact", {
      ...viewData("/contact", req),
      title: "Me contacter - Sandrine Mundweiler | Psychothérapie Lyon 6",
      description:
        "Me contacter : Sandrine Mundweiler, psycho-praticienne à Lyon 6. Téléphone, e-mail et adresse du cabinet.",
      sent: false,
      error: "Merci de confirmer la lecture de la politique de confidentialité avant l'envoi.",
      formData: { name, email, message }
    });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).render("pages/contact", {
      ...viewData("/contact", req),
      title: "Me contacter - Sandrine Mundweiler | Psychothérapie Lyon 6",
      description:
        "Me contacter : Sandrine Mundweiler, psycho-praticienne à Lyon 6. Téléphone, e-mail et adresse du cabinet.",
      sent: false,
      error: "Merci de fournir une adresse e-mail valide.",
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
      ...viewData("/contact", req),
      title: "Me contacter - Sandrine Mundweiler | Psychothérapie Lyon 6",
      description:
        "Me contacter : Sandrine Mundweiler, psycho-praticienne à Lyon 6. Téléphone, e-mail et adresse du cabinet.",
      sent: false,
      error: userError,
      formData: { name, email, message }
    });
  }

  return res.redirect("/contact?sent=1");
});

app.get("/blog", (req, res) => {
  res.render("pages/blog-index", {
    ...viewData("/blog", req),
    title: "Blog : Actualités et conseils - Sandrine Mundweiler",
    description:
      "Articles sur l'anxiete, le stress, le burn-out et les approches psychocorporelles.",
    posts: blogPosts
  });
});

app.get("/blog/:slug", (req, res) => {
  const post = blogPosts.find((item) => item.slug === req.params.slug);
  if (!post) {
    return res.status(404).render("pages/not-found", {
      ...viewData("", req),
      title: "Page non trouvee",
      description: "La page demandee est introuvable."
    });
  }

  return res.render("pages/blog-post", {
    ...viewData("/blog", req),
    title: `${post.title} - Sandrine Mundweiler`,
    description: post.excerpt,
    post
  });
});

app.get("/robots.txt", (req, res) => {
  const canonicalBase = getCanonicalBase(req);
  res.type("text/plain");
  res.send(`User-agent: *\nAllow: /\n\nSitemap: ${canonicalBase}/sitemap.xml\n`);
});

app.get("/sitemap.xml", (req, res) => {
  const canonicalBase = getCanonicalBase(req);
  const staticPaths = [
    "/",
    "/a-propos",
    "/approches-therapeutiques",
    "/experience-formation",
    "/avis-temoignage",
    "/contact",
    "/faq",
    "/blog",
    "/mentions-legales",
    "/politique-confidentialite",
    "/politique-cookies",
    ...seoLandingPaths
  ];
  const postPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  const allPaths = [...staticPaths, ...postPaths];

  const urls = allPaths
    .map((entry) => `  <url><loc>${canonicalBase}${entry}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  res.type("application/xml");
  res.send(xml);
});

app.use((req, res) => {
  res.status(404).render("pages/not-found", {
    ...viewData("", req),
    title: "Page non trouvee",
    description: "La page demandee est introuvable."
  });
});

app.listen(port, host, () => {
  console.log(`Serveur demarre sur ${siteUrl} (ecoute ${host}:${port})`);
});
