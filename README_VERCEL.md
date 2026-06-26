Déploiement sur Vercel — instructions rapides

1) Pré-requis
- Avoir un dépôt Git et un compte Vercel.
- Installer la CLI si tu veux déployer depuis ce terminal: `npm i -g vercel`.

2) Déploiement (interface web — recommandé si tu ne veux pas utiliser la CLI)
- Pousser le repo sur GitHub/GitLab/Bitbucket.
- Sur vercel.com -> New Project -> Importer le repo.
- Dans les Settings du projet, si nécessaire, définir le `Start Command` à `node server.js`.
- Ajouter les variables d'environnement (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM_EMAIL`, `CONTACT_TO_EMAIL`) dans Settings > Environment Variables.
- Si le domaine est acheté chez Namecheap, pointer le DNS vers Vercel puis rattacher le domaine dans l'onglet Domains du projet.

3) Déploiement via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

4) Notes techniques
- Le projet utilise Express (`server.js`). Deux approches possibles :
  - Lancer un serveur Node classique sur Vercel en définissant le `Start Command` à `node server.js` (plus simple).
  - Adapter l'app en fonctions serverless (placer des handlers dans `api/`) pour tirer parti des fonctions Vercel; cela nécessite de refactorer `server.js`.
- Le fichier `vercel.json` ajouté est une configuration minimale qui tente de diriger les routes vers `server.js`. Si tu préfères ne pas utiliser cette approche, supprime `vercel.json` et configure le `Start Command` dans l'interface Vercel.
- Les e-mails du formulaire doivent être envoyés via Gmail si tu utilises `sandrinemundweiler@gmail.com` comme boîte de réception; il faut donc un mot de passe d'application Google et `SMTP_HOST=smtp.gmail.com`.

5) Commandes utiles locales

```bash
# Lancer en local
npm install
npm run dev

# Lancer build & prod (sur Vercel, `vercel --prod` suffit)
npm start
```
