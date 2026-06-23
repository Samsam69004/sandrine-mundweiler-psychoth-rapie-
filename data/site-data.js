const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
  { href: "/approches-therapeutiques", label: "Approches" },
  { href: "/experience-formation", label: "Expérience" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/en-pratique", label: "Pratique" },
  { href: "/avis-temoignage", label: "Avis" },
];

const pages = {
  "a-propos": {
    path: "/a-propos",
    title: "Sandrine Mundweiler | Psychothérapie et Thérapie psychocorporelle Lyon",
    description:
      "Sandrine Mundweiler, praticienne en psychothérapie à Lyon 6. 35 ans d'expérience en santé mentale et accompagnement de l'unité corps-psychisme via l'APSYSE.",
    kicker: "",
    heading: "À PROPOS DE SANDRINE MUNDWEILER",
    sections: [
      {
        title: "",
        blocks: [
          {
            type: "paragraph",
            text:
              "Depuis 35 ans dans le secteur médical, je suis en recherche passionnée sur le fonctionnement de l'être humain et le pourquoi de la souffrance et de la maladie."
          },
          { type: "emphasis", text: "quelle est l'origine et le sens de la souffrance?" },
          {
            type: "paragraph",
            text:
              "Kinésithérapeute de formation initiale, j'ai progressivement été formée à l'ostéopathie, à la médecine chinoise puis à la thérapie psychosomatique, notamment avec"
          },
          { type: "emphasis", text: "l'APSYSE: analyse psycho somato énergétique." },
          {
            type: "paragraph",
            text:
              "Ma pratique a ainsi évolué au fil de mes années d'apprentissage, du métier de soin du corps physique à celui d'accompagnement de l'être dans son unité corps-psychisme."
          },
          { type: "emphasis", text: "du corps mécanique au corps-sujet-parlant" },
          {
            type: "paragraph",
            text:
              "Je considère l'être humain dans sa dimension tri-partite physique, psychologique (mentale et émotionnelle) et spirituelle."
          },
          {
            type: "emphasis",
            text:
              "notre corps contient notre mémoire mais nous sommes bien plus que notre mémoire : nous sommes la Vie"
          },
          {
            type: "html",
            text:
              "La souffrance se manifeste par des symptômes psychiques et/ou physiques :<br /><span class=\"red-list\">dépression, anxiété, obsessions, angoisses, insomnies, addictions, difficultés relationnelles, perte de confiance en soi, scenario d'échecs répétitifs, burnout, difficultés sexuelles, fatigue chronique, etc. ou simple mal-être.</span>"
          },
          {
            type: "paragraph",
            text:
              "Elle se chronicise et se pathologise quand le retour à l'équilibre psycho émotionnel donc neurovégétatif ne se fait pas suite à un vécu traumatique ou alors, quand la personne est dans l'impossibilité d'accomplir pleinement l'être unique qu'elle a à manifester au monde."
          },
          {
            type: "paragraph",
            text:
              "Nos douleurs, maladies, somatisations, mal être d'aujourd'hui ont souvent leurs racines dans le passé de notre histoire de vie personnelle ou des histoires héritées de nos ascendants familiaux et sociétaux."
          },
          { type: "emphasis", text: "Ce passé nous coupe du Vivant, de l' \"ici et maintenant\"." },
          {
            type: "paragraph",
            text:
              "Les traumas vécus dans nos relations affectives primaires ou lors d'évènements traumatiques extérieurs impactent notre être en développement dès la vie intra-utérine, altérant son énergie de vie et générant des réflexes corporels ou caractériels défensifs. De ce vécu vont se former des croyances et des émotions qui vont piloter nos comportements et enfermer notre vie dans des schémas restrictifs… jusqu'à ce qu'on en prenne conscience."
          },
          {
            type: "paragraph",
            text:
              "Nos programmes automatiques de croyances sur le monde, les autres ou soi-même sont à mettre à jour pour vérifier leur influence bénéfique ou délétère."
          },
          {
            type: "paragraph",
            text:
              "Lorsque nous restons aveugles , sourds ou muets à nos souffrances passées, elles vont tôt ou tard se réactualiser dans notre présent sous forme de maladie ou de mal-être, afin qu'advienne la conscience de qui nous sommes Vraiment."
          },
          { type: "emphasis", text: "notre corps nous instruit, écoutons le !" },
          {
            type: "paragraph",
            text:
              "Quand notre énergie de vie est blessée et non soignée, elle reste figée dans le corps sous forme de \"cuirasse musculaire\" et/ou dans le psychisme sous forme de \"cuirasse caractérielle\" (notion de \"cuirasse\" conceptualisée par W. Reich et qui représente notre système de défense face au monde extérieur). Notre relation au monde, aux autres et à soi-même s'en trouve impactée : on se limite, se crispe, s'inhibe, ou bien on sur réagit aux situations de la vie courante, on est sur le qui-vive et on vit en mode défensif, survie permanent…Ce n'est pas cela Vivre!"
          },
          {
            type: "paragraph",
            text:
              "Avec prudence et respect, la thérapie corporelle permet de plonger au fond de soi, de retrouver les traumatismes oubliés ou refoulés, de les exprimer enfin, ce qui va libérer les blocages psycho émotionnels, assouplir les \"cuirasses\" réflexes de défense , et ainsi permettre à l'énergie de Vie de circuler plus librement. L'intention est de rendre l'ego plus fonctionnel et suffisamment souple pour s'adapter aux vicissitudes de la vie et laisser l'Etre émerger."
          },
          {
            type: "paragraph",
            text:
              "L'APSYSE est une méthode précise et globale, qui aide à restructurer un moi plus solide et fonctionnel capable de vivre ancré dans sa réalité, à retrouver un certain bien-être, une énergie de joie et de créativité et d'ouvrir son cœur au Vivant."
          }
        ]
      }
    ]
  },
  "en-pratique": {
    path: "/en-pratique",
    title: "En pratique - Sandrine Mundweiler | Psychothérapie Lyon 6",
    description: "Informations pratiques sur les séances de psychothérapie : durée, tarifs et cadre thérapeutique à Lyon.",
    kicker: "Informations utiles",
    heading: "En pratique",
    bodyClass: "page-en-pratique",
    sections: [
      {
        title: "Déroulement d'une séance en individuel au cabinet (Lyon 6)",
        blocks: [
          {
            type: "html",
            text: `
              <p>La séance se déroule en 4 temps principaux :</p>
              <p><strong>Temps d'accueil et de recentrage :</strong> Nous prenons un moment pour faire le point sur « comment et avec quoi j’arrive au cabinet ? », « quel est mon besoin et donc ma demande pour cette séance ? » et un « retour sur la dernière séance ».</p>
              <p><strong>Temps de parole :</strong> Un échange pour analyser une problématique spécifique.</p>
              <p><strong>Temps de travail corporel :</strong> Allongé sur le matelas, ou assis ou debout, le corps est invité à s'exprimer à travers les ressentis : mises en situations concrètes, mise en action, stimulations du corps pour défaire les blocages. Chaque séquence de travail corporel est suivie d'une mise en mots du vécu sensoriel.</p>
              <p><strong>Temps de conclusion :</strong> Nous faisons le point sur « avec quoi je repars de cette séance ? ».</p>
              <p><strong>Durée de la séance :</strong> 1h 30 en moyenne</p>
              <p><strong>Rythme des rendez-vous :</strong> Tous les 15 jours est la durée souhaitable pour la dynamique du processus thérapeutique, mais cela peut être ajusté au cas par cas.</p>
              <p><strong>Coût de la séance :</strong> 85 euros</p>
            ` // Ensure this is a valid template literal
          }
        ]
      },
      {
        title: "l’Apsyse en groupe à Lyon 4",
        blocks: [
          {
            type: "html",
            text: `
              <p>La thérapie en groupe vient enrichir la thérapie individuelle.</p>
              <p>Elle permet de se rencontrer à travers plusieurs autres.</p>
              <p>Elle amplifie le travail personnel de par les échos que provoquent en soi les histoires de chacun.</p>
              <p>Elle permet d’explorer les dynamiques relationnelles et de les expérimenter en direct.</p>
              <p>Elle crée une expérience forte, authentique et rare de partage en humanité.</p>
              <p>Nous sommes deux thérapeutes pour encadrer ce groupe.</p>
              <p>Le groupe est de 10 personnes maximum.</p>
            `
          }
        ]
      }
    ]
  },
  "avis-temoignage": {
    path: "/avis-temoignage",
    title: "Avis et Témoignages - Sandrine Mundweiler",
    description: "Découvrez des avis publics et des retours d'expérience sur l'accompagnement de Sandrine Mundweiler en psychothérapie et thérapie psychocorporelle.",
    kicker: "Retours d'expérience",
    heading: "Avis & Témoignages",
    sections: [
      {
        title: "Avis publics",
        paragraphs: [
          "Voici une sélection d'avis publics publiés sur Pages Jaunes et Google. Pour consulter l'ensemble des retours, utilisez les liens en fin de page."
        ]
      },
      {
        title: "Pages Jaunes",
        reviews: [
          {
            source: "Pages Jaunes",
            sourceClass: "pages-jaunes",
            author: "pigenel.odile",
            date: "23 mars 2026",
            rating: "5/5",
            quote:
              "Je tiens à saluer le grand professionnalisme de cette praticienne. Grâce à son approche globale, qui prend en compte à la fois le corps et le psychisme, elle accompagne avec justesse vers de véritables prises de conscience. Son travail permet d'avancer vers une meilleure connaissance de soi, dans un cadre à la fois bienveillant et structurant. Une expérience profondément enrichissante que je recommande vivement."
          },
          {
            source: "Pages Jaunes",
            sourceClass: "pages-jaunes",
            author: "clado",
            date: "21 janvier 2026",
            rating: "5/5",
            quote:
              "Par la méthode qu'elle propose, alliant la parole et le travail corporel (Apsyse), Sandrine m'aide à comprendre mes schémas limitants et à les dépasser pour être plus à l'aise dans mon quotidien. Son écoute bienveillante, sa disponibilité et sa manière d'expliquer sont des atouts pour des séances qui aident à avancer et se reconstruire."
          },
          {
            source: "Pages Jaunes",
            sourceClass: "pages-jaunes",
            author: "annedelombares",
            date: "13 janvier 2026",
            rating: "5/5",
            quote:
              "Excellente professionnelle à l'écoute de ses patients, toute en sensibilité et en douceur, très compétente en thérapie corporelle."
          },
          {
            source: "Pages Jaunes",
            sourceClass: "pages-jaunes",
            author: "Charlotte Gautherot",
            date: "7 janvier 2026",
            rating: "5/5",
            quote:
              "Psychothérapeute très professionnelle et bienveillante à Lyon. À l'écoute, rassurante et efficace, elle aide à avancer avec confiance dès les premières séances."
          }
        ]
      },
      {
        title: "Google",
        reviews: [
          {
            source: "Google",
            sourceClass: "google",
            author: "Nolwenn Benoît",
            date: "il y a 4 mois",
            rating: "5/5",
            quote:
              "Je suis en thérapie avec Sandrine depuis plus de 5 ans. Dans le cabinet, écoute, respect et compréhension instaurent une relation de confiance. Les séances allient échanges verbaux et travail corporel."
          },
          {
            source: "Google",
            sourceClass: "google",
            author: "Pigenel Odile",
            date: "il y a 2 mois",
            rating: "5/5",
            quote:
              "Je tiens à saluer le grand professionnalisme de cette praticienne. Grâce à son approche globale, qui prend en compte à la fois le corps et le psychisme, elle accompagne avec justesse vers de véritables prises de conscience."
          },
          {
            source: "Google",
            sourceClass: "google",
            author: "Claude Francou",
            date: "il y a 5 mois",
            rating: "5/5",
            quote:
              "Sandrine Mundweiler m'a reçu dans un cadre respectueux, avec une écoute authentique et beaucoup de bienveillance. Les séances d'Apsyse m'apportent un apaisement durable."
          },
          {
            source: "Google",
            sourceClass: "google",
            author: "Rachel Sintzel",
            date: "il y a 4 mois",
            rating: "5/5",
            quote:
              "Cela fait plus d'un an que j'ai commencé une thérapie avec Sandrine, et j'apprécie énormément son humanité et sa bienveillance. Au-delà des discussions, elle met en place un vrai travail corporel qui permet d'aller encore plus loin."
          }
        ]
      },
      {
        title: "Retrouver tous les avis",
        blocks: [
          {
            type: "html",
            text: `
              <div class="review-source-links">
                <a class="btn btn-secondary" href="https://www.pagesjaunes.fr/pros/57440598" target="_blank" rel="noopener noreferrer">Voir tous les avis sur Pages Jaunes</a>
                <a class="btn btn-secondary" href="https://www.google.com/search?sa=X&sca_esv=53c5f5d984ac257c&sxsrf=APpeQnvHfGrBP72564ee0XMxyzLij_BOEQ:1782229697568&q=Mundweiler+Sandrine+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI0MzW1MDcwNjIyNDc3MjUwNd3AyPiKUcK3NC-lPDUzJ7VIITgxL6UoMy9VwbEss3gRK04pAOJwz1JOAAAA&rldimm=65587032217725055&tbm=lcl&hl=fr-FR&ved=2ahUKEwjO95-A252VAxWchP0HHU5cLDUQ9fQKegQISxAG&biw=1536&bih=791&dpr=1.25#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer">Voir tous les avis sur Google</a>
              </div>
            `
          }
        ]
      }
    ]
  },
  "approches-therapeutiques": {
    path: "/approches-therapeutiques",
    title: "Approches Thérapeutiques - Sandrine Mundweiler | Lyon 6",
    description:
      "Ma pratique de la psychothérapie à Lyon intègre l'APSYSE, l'EFT et la respiration consciente pour une gestion des émotions et un équilibre de santé mentale durable.",
    kicker: "",
    heading: "Mes approches thérapeutiques - ",
    sections: [
      {
        title: "",
        paragraphs: [
          "Dans mon cabinet de Lyon 6, je propose une psychothérapie intégrative s'appuyant sur différentes approches :"
        ]
      },
      {
        title: "",
        list: [
          "L'APSYSE (Analyse Psycho-Somato-Énergétique) : une thérapie psychocorporelle qui allie l'écoute psychanalytique à la végétothérapie pour libérer les blocages émotionnels cristallisés.",
          "L'EFT (Emotional Freedom Technique) pour diminuer les charges émotionnelles.",
          "Le contact guérisseur avec l'enfant intérieur pour développer l'amour de soi.",
          "Le massage thérapeutique lorsque le besoin de recevoir se manifeste.",
          "La respiration consciente qui permet de se rencontrer au delà du mental."
        ]
      },
      {
        title: "",
        paragraphs: [
          "Mes valeurs d'accompagnement sont basées sur la disponibilité à l'autre, une écoute profonde, une posture éthique alliant respect et bienveillance empathique et cadre de fonctionnement clair ajusté à chacun. Je demande aux consultants de s'engager dans leur démarche thérapeutique afin que je puisse moi-même m'engager avec eux sur leur chemin d'éveil de la conscience et de libération intérieure.",
          "Pour en savoir plus sur la méthode : <a href=\"https://apsyse.com/\" target=\"_blank\" rel=\"noopener noreferrer\">site APsySE</a>"
        ]
      }
    ]
  },
  "experience-formation": {
    path: "/experience-formation",
    title: "Expérience professionnelle - Sandrine Mundweiler",
    description:
      "Expérience professionnelle à Lyon et formation continue: kinésithérapie, ostéopathie, médecine chinoise, APSYSE, EFT et respiration consciente.",
    kicker: "Expérience professionnelle",
    heading: "Expérience et Formation - ",
    sections: [
      {
        title: "1991 à 2022",
        paragraphs: [
          "Exercice en cabinet libéral de la kinésithérapie, ostéopathie et posturologie à Lyon."
        ]
      },
      {
        title: "2010 à aujourd'hui",
        paragraphs: [
          "Exercice en libéral en tant que psycho praticienne de la thérapie corporelle Apsyse.",
          "Sur Lyon."
        ],
        list: [
          "En individuel",
          "En groupe continu",
          "Stages thérapeutiques ponctuels sur une semaine ou week-end sur Lyon ou dans le Gers au Domaine Mastaram"
        ]
      },
      {
        title: "Formation",
        paragraphs: [
          "Diplômée de masso-kinésithérapie en 1991 à Lyon.",
          "Formée à l'ostéopathie par le CERTM à Lyon.",
          "Formée en médecine chinoise sur 4 ans à Lyon.",
          "Formée sur 6 ans en Apsyse à l'Institut Somapsy à Lyon, certifiée en 2010.",
          "Formation continue dans différentes approches de psychothérapie, notamment la médecine du sens du Dr Olivier Soulier, Ho'oponopono, EFT, théorie polyvagale, respiration consciente.",
          "En supervision permanente.",
          "Membre de la FF2P - Fédération Française de Psychothérapie et Psychanalyse."
        ]
      }
    ]
  },
  "therapie-traumatisme-lyon": {
    path: "/therapie-traumatisme-lyon",
    title: "Sandrine Mundweiler - Thérapie du traumatisme à Lyon",
    description:
      "Thérapie du traumatisme à Lyon avec Sandrine Mundweiler. Accompagnement psychocorporel pour réguler les émotions et restaurer la sécurité intérieure.",
    kicker: "Page thematique",
    heading: "Sandrine Mundweiler - Thérapie du traumatisme à Lyon",
    sections: [
      {
        title: "Quand consulter",
        paragraphs: [
          "Hypervigilance, anxiete persistante, dissociation, fatigue de fond, blocages relationnels ou somatisations recurrentes."
        ]
      },
      {
        title: "Objectif",
        paragraphs: [
          "Retrouver un sentiment de securite interne et remettre du mouvement la ou l'experience est restee figee."
        ]
      }
    ]
  },
  "burn-out-lyon": {
    path: "/burn-out-lyon",
    title: "Sandrine Mundweiler - Accompagnement Burn-out à Lyon",
    description:
      "Accompagnement du burn-out à Lyon par Sandrine Mundweiler. Retrouvez l'équilibre face à l'épuisement, la surcharge mentale et la perte de sens.",
    kicker: "Page thematique",
    heading: "Sandrine Mundweiler - Accompagnement Burn-out à Lyon",
    sections: [
      {
        title: "Signes frequents",
        list: [
          "Epuisement physique et mental",
          "Troubles du sommeil",
          "Irritabilite et perte de concentration",
          "Sentiment de vide ou de desengagement"
        ]
      },
      {
        title: "Axes de travail",
        list: [
          "Sortir du mode survie",
          "Retrouver des limites saines",
          "Restauration progressive de l'elan vital"
        ]
      }
    ]
  },
  "gestion-stress-lyon": {
    path: "/gestion-stress-lyon",
    title: "Sandrine Mundweiler - Gestion du stress et des émotions à Lyon",
    description:
      "Sandrine Mundweiler, spécialiste en gestion du stress à Lyon 6. Accompagnement en thérapie psychocorporelle pour retrouver apaisement et santé mentale.",
    kicker: "Page thematique",
    heading: "Sandrine Mundweiler - Gestion du stress et anxiété à Lyon",
    sections: [
      {
        title: "Manifestations",
        paragraphs: [
          "Ruminations, tensions corporelles, respiration courte, fatigue de vigilance, difficulte a recuperer."
        ]
      },
      {
        title: "Approche",
        list: [
          "Ecoute clinique",
          "Regulation corporelle progressive",
          "Integration emotionnelle",
          "Outils concrets de stabilisation"
        ]
      }
    ]
  }
};

const legalPages = {
  "mentions-legales": {
    path: "/mentions-legales",
    title: "Mentions Légales - Sandrine Mundweiler",
    description: "Mentions legales du site.",
    kicker: "Cadre legal",
    heading: "Mentions Légales",
    sections: [
      {
        type: "html",
        text: `
          <p><strong>Responsable de la publication :</strong> Sandrine Mundweiler</p>
          <p><strong>Dénomination sociale :</strong> Sandrine Mundweiler</p>
          <p><strong>Adresse du cabinet :</strong> 11 Rue Curie, 69006 Lyon</p>
          <p><strong>Téléphone :</strong> 06 32 46 62 00</p>
          <p><strong>E-mail :</strong> sandrinemundweiler@gmail.com</p>
          <p><strong>Forme juridique :</strong> Profession libérale (Psycho-praticienne)</p>

          <p><strong>Hébergeur :</strong> Vercel Inc.<br>
          440 N Barranca Ave #4133<br>
          Covina, CA 91723<br>
          États-Unis</p>

          <p><strong>Propriété intellectuelle :</strong><br>
          L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>

          <p>La Commission européenne fournit une plateforme de règlement des litiges en ligne (OS) disponible à l'adresse <a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr/</a>.</p>
        `
      }
    ]
  },
  "politique-confidentialite": {
    path: "/politique-confidentialite",
    title: "Politique de confidentialite",
    description: "Politique de confidentialite.",
    kicker: "Politique de confidentialité",
    heading: "Politique de confidentialité",
    sections: [
      {
        type: "html",
        text: `Politique de confidentialité : Politique de confidentialité
Ce modèle est un exemple de texte et ne peut pas être publié. Les explications et les informations fournies ici ne sont que des explications, des informations et des exemples généraux. Vous ne devez pas vous fier à ce modèle comme à un conseil juridique ou à des recommandations sur ce que vous devez faire. Nous vous recommandons de demander un avis juridique pour vous aider à comprendre et à élaborer votre politique de protection de confidentialité.

Une politique de confidentialité est une déclaration qui divulgue tout ou partie des façons dont un site Web collecte, utilise, divulgue et gère les données de ses visiteurs et clients. Elle répond à une obligation légale de protéger la vie privée d'un visiteur ou d'un client. Le lien vers votre politique de confidentialité doit apparaître sur toutes les pages de votre site.

Voici quelques exemples de contenu que vous pouvez inclure dans votre politique de confidentialité :

Quelles informations vous recueillez

Comment vous recueillez les informations

Pourquoi vous recueillez les informations

Avec qui vous partagez les informations

Où sont stockées les informations

Combien de temps vous conservez les informations

Comment vous protégez les informations

Les modifications ou mises à jour de la Politique de confidentialité

Cliquez ici pour obtenir des informations plus détaillées sur la création de votre politique de confidentialité.`
      }
    ]
  },
  "politique-cookies": {
    path: "/politique-cookies",
    title: "Politique de cookies",
    description: "Politique de cookies.",
    kicker: "Cookies",
    heading: "Politique de cookies",
    sections: [
      {
        type: "html",
        text: `1. Qu'est-ce qu'un cookie ?
Un cookie est un petit fichier constitué de lettres et de chiffres, et téléchargé sur votre ordinateur lorsque vous accédez à certains sites Web. En général, les cookies permettent à un site Web de reconnaître l'ordinateur de l’utilisateur.

La chose la plus importante à savoir sur les cookies que nous plaçons est qu'ils servent à améliorer la convivialité de notre site web, par exemple en mémorisant les préférences du site et les paramètres linguistiques.

2. Pourquoi utilisons-nous des cookies ?
Nous pouvons utiliser des cookies et d'autres technologies similaires pour un certain nombre de raisons, par exemple : i) pour des besoins de sécurité ou de protection contre la fraude, et afin d'identifier et de prévenir les cyber-attaques, ii) pour vous fournir le service que vous avez choisi de recevoir de notre part, iii) pour contrôler et analyser les performances, le fonctionnement et l'efficacité de notre service et iv) améliorer votre expérience utilisateur.

3. Tableau des cookies :
Dans cette section, vous devez mentionner les cookies que vous utilisez sur votre site. Pour plus d'informations, cliquez ici.

4. Vos choix :
Pour en savoir plus sur les cookies, notamment sur la manière de voir quels cookies ont été définis et de comprendre comment les gérer, les supprimer ou les bloquer, visitez https://aboutcookies.org/ ou https://www.allaboutcookies.org/fr/.

Il est également possible d'empêcher votre navigateur d'accepter les cookies en modifiant les paramètres concernés dans votre navigateur. Vous pouvez généralement trouver ces paramètres dans le menu « Options » ou « Préférences » de votre navigateur.

Veuillez noter que la suppression de nos cookies ou la désactivation de futurs cookies ou technologies de suivi pourront vous empêcher d'accéder à certaines zones ou fonctionnalités de nos services, ou pourront autrement affecter négativement votre expérience d'utilisateur.

Les liens suivants peuvent être utiles, ou vous pouvez utiliser l'option « Aide » de votre navigateur.

Paramètres des cookies dans Firefox

Paramètres des cookies dans Internet Explorer

Paramètres des cookies dans Google Chrome

Paramètres des cookies dans Safari (OS X)

Paramètres des cookies dans Safari (iOS)

Paramètres des cookies dans Android

Pour refuser et empêcher que vos données soient utilisées par Google Analytics sur tous les sites Web, consultez les instructions suivantes :

https://tools.google.com/dlpage/gaoptout?hl=fr

Il se peut que nous modifiions cette politique en matière de cookies. Nous vous encourageons à consulter régulièrement cette page pour obtenir les dernières informations sur les cookies.`
      }
    ]
  }
};

const blogPosts = [
  {
    slug: "retrouver-la-confiance-en-soi",
    title: "Retrouver la confiance en soi",
    date: "19 mai 2026",
    excerpt: "Idéalement, le développement psychoaffectif de l’enfant devrait permettre l’émergence de cette confiance...",
    image: "confianceensoi.png",
    paragraphs: [
      "Idéalement, le développement psychoaffectif de l’enfant devrait permettre l’émergence de cette confiance, indispensable pour trouver sa place et s’épanouir. Cependant, le contexte familial et sociétal, souvent stressant, exigeant ou jugeant, génère fréquemment chez l’enfant un sentiment d’insuffisance, d’inadéquation ou d’incompétence. Dépendant du regard extérieur, l’enfant qui ne répond pas aux attentes peut développer une peur profonde du rejet ou de l’abandon, accompagnée de honte et de culpabilité.",
      "Les conditions de vie prénatales, la naissance, un accueil défavorable, des abus, une éducation répressive ou dénarcissisante fragilisent également la construction de la confiance en soi. L’enfant, incapable de remettre en cause ses figures d’attachement, internalise l’idée qu’il est « mauvais ». De nombreux événements ou climats familiaux insécurisants sont ainsi à l’origine du manque de confiance à l’âge adulte.",
      "L’APSySE (Analyse PsychoSomatoEnergétique) est une approche psychocorporelle qui, dans un cadre d’écoute non directive, permet de revisiter par le corps des expériences fondatrices. Le ressenti corporel et émotionnel, accueilli sans jugement, devient un accès direct à l’histoire personnelle. Le corps, porteur de mémoire, révèle les blocages liés aux traumatismes passés.",
      "Progressivement, la personne se libère de la honte et de la culpabilité, apprend à s’accepter, à devenir un parent sécurisant pour elle-même et à réhabiliter les fonctions naturelles nécessaires à une relation ajustée. Ce processus permet de retrouver une confiance en soi authentique et durable.",
      "#thérapiepsychocorporelle #lyon6 #apsyse"
    ]
  }
  ,
  {
    slug: "groupe-therapie-apsyse-lyon",
    title: "Groupe de thérapie psychocorporelle APSYSE à Lyon",
    date: "27 janvier 2026",
    excerpt: "Un espace de travail thérapeutique en groupe pour réinvestir le corps, libérer les blocages et restaurer la présence à soi.",
    image: "groupe.png",
    additionalImages: ["groupe1.png"],
    fullImage: true,
    paragraphs: [
      "Le travail en groupe est un puissant catalyseur de changement. L'APSySE combine une approche analytique et une dimension corporelle (végétothérapie) pour libérer les traumatismes refoulés et les blocages émotionnels cristallisés.",
      "Ces groupes réguliers offrent un cadre sécurisant pour explorer votre intériorité, assouplir les cuirasses musculaires et permettre à l'énergie de vie de circuler plus librement.",
      "Vous pouvez consulter l'affiche complète ci-dessus pour le détail des dates et des modalités d'inscription, ou me contacter directement pour plus de renseignements."
    ]
  }
];

const seoLandingPaths = [
  "/therapie-traumatisme-lyon",
  "/burn-out-lyon",
  "/gestion-stress-lyon"
];

const cabinet = {
  address: "11 Rue Curie, 69006 Lyon",
  publicTransport: [
    "Métro Brotteaux (4 minutes à pied)",
    "Métro Masséna (7 minutes à pied)",
    "Métro Charpennes (env. 8 min à pied)"
  ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.155460596328!2d4.849089576722659!3d45.76807691361276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea6607a75931%3A0x67399a9a304f56f1!2s11%20Rue%20Curie%2C%2069006%20Lyon!5e0!3m2!1sfr!2sfr!4v1715783315664!5m2!1sfr!2sfr"
};

module.exports = {
  navLinks,
  pages,
  legalPages,
  blogPosts,
  seoLandingPaths,
  cabinet
};
