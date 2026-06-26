Déploiement sur Vercel

1) Initialiser un dépôt Git (si ce n'est pas déjà fait):

```bash
git init
git add .
git commit -m "Prépare le site pour déploiement"
```

2) Pousser vers un remote (GitHub/GitLab/Bitbucket). Exemple GitHub:

```bash
git remote add origin git@github.com:VOTRE_UTILISATEUR/VOTRE_REPO.git
git branch -M main
git push -u origin main
```

3) Connecter le dépôt à Vercel:
- Sur vercel.com, cliquez sur "New Project" → importez votre repo.
- Dans les réglages du projet (si nécessaire), définissez le "Start Command" sur `node server.js`.

4) Variables d'environnement (optionnelles):
- Pour que l'envoi d'emails fonctionne, configurez `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_EMAIL`, `CONTACT_TO_EMAIL` dans les Settings > Environment Variables de Vercel.
- Si vous utilisez la boîte Gmail `sandrinemundweiler@gmail.com`, privilégiez `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false` et un mot de passe d'application Google.

5) Domaine Namecheap
- Si le nom de domaine a été acheté chez Namecheap, ajoutez-le dans Vercel (Settings -> Domains) puis mettez à jour les enregistrements DNS selon les instructions fournies par Vercel.

6) Déploiement manuel via Vercel CLI (optionnel):

```bash
npm i -g vercel
vercel login
vercel --prod
```

Remarques:
- Vercel exécute par défaut des fonctions serverless; ce projet utilise un serveur Express classique (`server.js`). Dans l'interface Vercel, définir le `Start Command` sur `node server.js` permet d'exécuter le serveur tel quel. Si vous préférez une approche serverless, il faudra adapter `server.js` en fonctions dans `api/`.
