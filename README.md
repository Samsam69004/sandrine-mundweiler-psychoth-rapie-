# Site multi-pages SEO dynamique - Sandrine Mundweiler

Le projet tourne maintenant avec Node.js + Express + EJS.

## Lancer le site en local

1. Installer les dependances:

	npm install

2. Demarrer le serveur:

	npm start

3. Ouvrir:

	http://127.0.0.1:4173

## Mode developpement (reload auto)

npm run dev

## Formulaire de contact: envoi d'e-mail

Le formulaire envoie des e-mails via SMTP si les variables d'environnement suivantes sont definies:

- `SMTP_HOST` (ex: `smtp.gmail.com`)
- `SMTP_PORT` (ex: `587`)
- `SMTP_SECURE` (`true` pour SSL direct, sinon `false`)
- `SMTP_USER` (identifiant SMTP)
- `SMTP_PASS` (mot de passe SMTP / mot de passe d'application)
- `SMTP_FROM_EMAIL` (adresse expediteur visible)
- `CONTACT_TO_EMAIL` (adresse de reception, optionnel; par defaut: `sandrinemundweiler@gmail.com`)

Exemple:

```bash
SMTP_HOST=smtp.gmail.com \
SMTP_PORT=587 \
SMTP_SECURE=false \
SMTP_USER=votre-compte@gmail.com \
SMTP_PASS=xxxx-xxxx-xxxx-xxxx \
SMTP_FROM_EMAIL=votre-compte@gmail.com \
CONTACT_TO_EMAIL=sandrinemundweiler@gmail.com \
npm start
```

Si la configuration SMTP est absente, le formulaire affiche un message d'erreur et n'envoie rien.

## Architecture dynamique

- `server.js`: routeur principal, rendu EJS, formulaire contact, sitemap dynamique.
- `data/site-data.js`: contenus centralises (pages, blog, landing SEO).
- `views/partials/*`: head, header, footer reutilisables.
- `views/pages/*`: templates des pages (accueil, texte, blog, contact).
- `assets/css/styles.css` et `assets/js/main.js`: styles et scripts front.

## SEO inclus

- Routing multi-pages propre (`/a-propos`, `/approches-therapeutiques`, etc.)
- Landing pages SEO (`/therapie-traumatisme-lyon`, `/burn-out-lyon`, `/gestion-stress-lyon`)
- Blog dynamique (`/blog` + pages articles)
- `robots.txt` dynamique
- `sitemap.xml` dynamique

## Important avant mise en ligne

1. Copier la photo dans `assets/images/sandrine_edited_edited.jpg`.
2. Definir le domaine final avec la variable d'environnement `SITE_URL`.
3. Completer l'hebergeur dans les mentions legales.
4. Mettre a jour les liens reels Instagram/Facebook/LinkedIn.
5. Soumettre `https://votre-domaine/sitemap.xml` dans Google Search Console.

## Remarque legale

Le titre de "psychotherapeute" etant reglemente en France, les textes utilisent "psycho-praticienne".
