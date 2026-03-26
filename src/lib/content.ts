// ============================================================
// CONTENU DU SITE — Modifiez vos textes ici
// ============================================================

export const siteConfig = {
  name: "Oppenheimer Conseil",
  contact: "contact@oppenheimer-conseil.com",
  domain: "www.oppenheimer-conseil.com",
};

export const team = {
  rodolphe: {
    nom: "Rodolphe Oppenheimer",
    role: "Fondateur",
    email: "rodolphe@oppenheimer-conseil.com",
    linkedin: "https://www.linkedin.com/in/rodolphe-oppenheimer-faure-3067463b9/",
    photo: "/rodolphe.png",
  },
  magali: {
    nom: "Magali Duval",
    role: "Associée",
    email: "magali@oppenheimer-conseil.com",
    linkedin: "",
    photo: "/magali.jpg",
  },
};

export const avocats = [
  {
    nom: "Julien Ayoun",
    titre: "Avocat en droit des affaires et droit immobilier",
    photo: "/ayoun.jpg",
    bio: "Le cabinet de Maître Julien Ayoun vous conseille et défend entre autres en droit immobilier et vous assiste notamment au cours des opérations d'expertise judiciaire en matière immobilière. L'expertise immobilière concerne les litiges liés aux bâtiments et aux propriétés immobilières. Elle peut être utilisée dans le cadre de procédures judiciaires, c'est-à-dire lorsqu'un tribunal a été saisi préalablement pour désigner l'expert judiciaire, pour évaluer par exemple la valeur d'une propriété immobilière, ou pour déterminer les causes d'un dommage ou pour résoudre des litiges liés à des questions de droit immobilier. Ce sera également le cas en matière de vices cachés.",
  },
  {
    nom: "Olivier Le Mailloux",
    titre: "Avocat au barreau de Marseille",
    photo: "/lemailloux.jpg",
    bio: "Après avoir enseigné à la Faculté de Droit d'Aix-en-Provence, Olivier Le Mailloux choisit, en 2012, d'intégrer le barreau de Marseille. Premier Secrétaire de la Conférence, il est actuellement Membre du Conseil de l'Ordre du barreau de Marseille. Ses domaines d'intervention sont essentiellement axés sur le droit pénal, les défenses des libertés fondamentales et le droit public. En outre, Membre de la liste de défense pénale d'urgence, il est Vice-président de la Commission Droits de l'homme du barreau de Marseille.",
  },
  {
    nom: "Béatrice Dubreuil",
    titre: "Avocate à la cour",
    photo: "/dubreuil.jpg",
    bio: "Titulaire d'un DEA de droit de la propriété intellectuelle (Paris II), Béatrice Dubreuil intervient auprès d'une clientèle d'entreprises privées françaises et internationales, et de particuliers, notamment en droit de la presse, droit des marques, dessins et modèles, droit de la propriété littéraire artistique, droit du cinéma, droit de l'audiovisuel, droit de l'informatique. Béatrice Dubreuil a également développé une expertise en droit pénal, en droit social, en droit de la concurrence et de la distribution au sein de grands cabinets français dans lesquels elle a collaboré.",
  },
  {
    nom: "Jean-Philippe Morel",
    titre: "Avocat au barreau de Dijon",
    photo: "/morel.jpg",
    bio: "Avocat français inscrit au barreau de Dijon, reconnu pour son engagement en droit pénal. Membre du conseil de l'ordre des avocats. Il intervient principalement dans la défense pénale, les affaires criminelles et correctionnelles, et l'assistance des victimes. Régulièrement sollicité pour des affaires médiatisées en Bourgogne, il est apprécié pour sa rigueur juridique, sa combativité à l'audience et sa proximité avec ses clients.",
  },
];

export const accueil = {
  hero: {
    label: "Accompagnement stratégique",
    titre: "Accompagnement de situations",
    titreAccent: "complexes et sensibles",
    sousTitre: "Conseil, structuration et intervention sur des dossiers bloqués ou difficiles à faire évoluer.",
    description: "Lorsqu'une situation s'enlise, devient illisible ou reste sans réponse, une approche classique ne suffit plus. Nous intervenons pour analyser, structurer et définir une stratégie adaptée à chaque contexte.",
    cta: "Soumettre une demande",
  },
  concerne: {
    label: "Êtes-vous concerné ?",
    titre: "Nous intervenons notamment lorsque :",
    items: [
      "Un dossier reste bloqué sans explication claire",
      "Les démarches n'aboutissent pas malgré plusieurs tentatives",
      "Une décision est difficile à comprendre ou à contester",
      "Plusieurs interlocuteurs rendent la situation confuse",
      "Aucune stratégie claire n'a encore été définie",
    ],
  },
  positionnement: {
    label: "Positionnement",
    titre: "Chaque situation est unique et appelle une réponse adaptée.",
    texte: "Notre intervention s'inscrit dans une logique de compréhension fine et d'efficacité concrète.",
  },
  apports: {
    label: "Ce que nous apportons",
    items: [
      "Une vision globale de la situation",
      "Une identification des blocages réels",
      "Une structuration claire du dossier",
      "Une stratégie adaptée au contexte",
      "Un accompagnement ciblé dans les démarches",
    ],
  },
  commentNousIntervenons: {
    label: "Comment nous intervenons",
    etapes: [
      { titre: "Analyse confidentielle", texte: "Prise de contact et évaluation initiale de votre demande." },
      { titre: "Diagnostic des enjeux", texte: "Lecture approfondie de la situation et identification des freins." },
      { titre: "Stratégie adaptée", texte: "Définition d'une ligne d'action claire et réaliste." },
      { titre: "Accompagnement", texte: "Appui dans les démarches et leur organisation." },
    ],
  },
  pourQui: {
    label: "Pour qui",
    items: [
      "Particuliers confrontés à une situation complexe",
      "Professionnels ou dirigeants",
      "Situations impliquant des institutions ou des environnements multiples",
    ],
  },
  methode: {
    label: "Méthode",
    titre: "Une approche fondée sur la rigueur",
    piliers: [
      { titre: "Discrétion", texte: "Chaque dossier est traité avec la plus stricte confidentialité." },
      { titre: "Rigueur", texte: "Analyse approfondie, diagnostic précis, stratégie adaptée." },
      { titre: "Approche personnalisée", texte: "Chaque situation fait l'objet d'une intervention sur mesure." },
    ],
  },
  selectivite: { texte: "Les interventions sont limitées à un nombre restreint de situations, afin de garantir un suivi rigoureux." },
  cadre: { texte: "Notre intervention consiste en un travail de conseil, d'analyse et d'accompagnement. Elle ne se substitue pas aux décisions des institutions concernées et ne constitue pas une activité juridique." },
  dimensionImplicite: { texte: "Une bonne compréhension des environnements décisionnels permet souvent de rétablir des situations qui semblaient figées." },
  ctaFinal: {
    titre: "Certaines situations nécessitent d'être abordées",
    titreAccent: "autrement",
    cta: "Soumettre une demande confidentielle",
  },
};

export const quiSommesNous = {
  label: "Qui sommes-nous",
  titre: "Notre parcours",
  paragraphes: [
    "En tant que président de l'Association Edgar Faure, fondateur et organisateur du Prix Edgar Faure, nous avons structuré et développé, sur plus de vingt années, une dynamique réunissant des personnalités issues d'univers très différents : députés, sénateurs, maires, membres de gouvernements, responsables institutionnels, journalistes, intellectuels, avocats, chefs d'entreprise et capitaines d'industrie.",
    "Au fil des éditions, le Prix a distingué et réuni des auteurs et des personnalités de premier plan issus de la vie publique, politique, intellectuelle et économique.",
    "Ce travail s'est inscrit dans un cadre institutionnel et collectif, au croisement d'environnements où se prennent et s'élaborent des décisions importantes.",
  ],
  experience: {
    titre: "Une compréhension concrète des mécanismes décisionnels",
    texte: "Cette expérience nous a permis de comprendre de manière concrète les mécanismes décisionnels, les équilibres institutionnels et les logiques d'acteurs qui structurent les situations complexes. Elle nourrit aujourd'hui notre capacité à analyser les situations avec précision, à en identifier les blocages réels et à proposer des stratégies adaptées, qu'il s'agisse de situations individuelles ou de contextes plus institutionnels.",
  },
  mandats: {
    titre: "Engagement public",
    paragraphes: [
      "Notre parcours inclut également un engagement public, avec deux mandats électifs dans les Hauts-de-Seine.",
      "Nous y avons exercé les fonctions de maire adjoint, délégué à la démocratie locale, à la médiation et à l'Observatoire de la laïcité.",
      "Nous avons également eu en charge la gestion d'un guichet unique, avec pour mission de traiter et débloquer des situations administratives complexes, souvent restées sans solution.",
    ],
  },
  distinctions: {
    titre: "Reconnaissances et engagements",
    sousTitre: "Rodolphe Oppenheimer-Faure",
    items: [
      "Chevalier de l'Ordre national du Mérite",
      "Officier de l'Ordre des Palmes académiques",
      "Officier de l'Ordre du Mérite agricole",
      "Chevalier de l'Ordre des Arts et des Lettres",
      "Commandeur de l'Étoile de Mohéli",
      "Médaille d'or de l'Étoile civique (soutenue par l'Académie française)",
      "Membre de la Société des gens de lettres",
      "Membre de La Renaissance française",
      "Membre de la SACEM",
    ],
  },
};

export const approcheReseau = {
  label: "Approche & réseau",
  titre: "Certaines situations ne se règlent pas seules.",
  intro: "Elles demandent d'être comprises, structurées… et parfois abordées autrement. Notre travail consiste à analyser chaque situation dans sa globalité et à construire, lorsque c'est nécessaire, une réponse adaptée en nous appuyant sur les bonnes compétences.",
  reseau: {
    titre: "Un réseau de compétences complémentaires",
    texte: "Au fil du temps, nous avons développé des relations de travail avec des professionnels issus de différents univers :",
    domaines: ["Conseil", "Accompagnement stratégique", "Gestion et organisation", "Environnements institutionnels"],
    conclusion: "Selon les situations, ces regards complémentaires permettent de clarifier, faire évoluer ou débloquer des dossiers qui semblaient figés.",
  },
  collaborateurs: {
    titre: "Extension collaborateurs",
    texte: "Certaines situations plus simples ou plus opérationnelles peuvent également être prises en charge dans ce cadre. Nous nous appuyons alors sur des collaborateurs de confiance, avec lesquels nous travaillons régulièrement, afin d'assurer un suivi sérieux, structuré et adapté à chaque dossier.",
  },
  signature: "L'essentiel n'est pas seulement de comprendre une situation, mais de savoir comment la faire évoluer.",
};

export const ceQueNousFaisons = {
  label: "Ce que nous faisons",
  titre: "Nos domaines d'intervention",
  items: [
    { titre: "Analyse de situation", texte: "Évaluation globale du dossier, des enjeux et des marges d'action." },
    { titre: "Identification des blocages", texte: "Repérage des freins, incohérences ou obstacles." },
    { titre: "Structuration du dossier", texte: "Organisation claire des éléments et des priorités." },
    { titre: "Conseil stratégique", texte: "Définition d'une ligne d'action adaptée." },
    { titre: "Accompagnement", texte: "Appui dans les démarches et leur organisation." },
    { titre: "Coordination", texte: "Mobilisation de compétences complémentaires si nécessaire." },
  ],
  methode: {
    titre: "Méthode",
    etapes: [
      { num: "1", titre: "Prise de contact confidentielle", texte: "Analyse initiale de la demande." },
      { num: "2", titre: "Étude du dossier", texte: "Lecture approfondie de la situation." },
      { num: "3", titre: "Diagnostic", texte: "Identification des enjeux et des possibilités réelles." },
      { num: "4", titre: "Orientation", texte: "Proposition d'un accompagnement si pertinent." },
    ],
    note: "Toutes les situations ne donnent pas lieu à une intervention.",
  },
};

export const situations = {
  label: "Situations accompagnées",
  titre: "Nous intervenons notamment dans les situations suivantes",
  items: [
    "Dossier en attente prolongée",
    "Situation bloquée malgré plusieurs démarches",
    "Décision difficile à comprendre",
    "Dossier mal structuré",
    "Environnement complexe ou peu lisible",
    "Besoin d'une stratégie avant d'agir",
  ],
};

export const soumettredemande = {
  label: "Soumettre une demande",
  titre: "Soumettre une demande confidentielle",
  texte: "Chaque demande fait l'objet d'une première analyse confidentielle. Cette étape permet d'évaluer la nature de la situation et la pertinence d'un accompagnement. Toutes les demandes ne donnent pas lieu à une intervention.",
  message: "Une réponse vous sera apportée dans les meilleurs délais.",
  formulaire: {
    nom: "Nom",
    email: "Email",
    telephone: "Téléphone",
    description: "Description de la situation",
    urgence: "Niveau d'urgence",
    niveaux: ["Standard", "Prioritaire", "Urgent"],
    upload: "Documents à joindre (facultatif)",
    bouton: "Envoyer ma demande",
  },
};

export const faq = {
  label: "Questions fréquentes",
  titre: "FAQ",
  questions: [
    { question: "Garantissez-vous un résultat ?", reponse: "Non. Chaque situation dépend de nombreux paramètres. Notre rôle est de structurer, analyser et orienter — jamais de promettre un résultat spécifique." },
    { question: "Êtes-vous avocat ?", reponse: "Non. Notre rôle est un accompagnement et un travail de conseil. Nous disposons d'un vivier d'avocats tous spécialisés dans leurs matières, car on ne peut pas être avocat et tout faire : chacun a un scope précis." },
    { question: "Intervenez-vous auprès des institutions ?", reponse: "Notre travail consiste à analyser, structurer et orienter les situations dans un cadre adapté, puis à intervenir lorsque cela est pertinent." },
  ],
};

export const contactPage = {
  label: "Contact",
  titre: "Prendre contact",
  texte: "Pour toute demande d'information ou pour soumettre une situation, vous pouvez nous contacter par les moyens suivants.",
};

export const mentionsLegales = {
  label: "Mentions légales",
  titre: "Mentions légales",
  editeur: {
    titre: "Éditeur du site",
    lignes: [
      "Oppenheimer Conseil est la marque de conseil de la société Oppenheimer Media",
      "OPPENHEIMER MEDIA SAS",
      "Société par actions simplifiée unipersonnelle",
      "Siège social : 48 rue de Sèvres, 75007 Paris – France",
      "Immatriculée au RCS de Paris sous le numéro 931 755 102",
      "SIRET : 931 755 102 00015",
      "TVA intracommunautaire : FR22 931 755 102",
    ],
  },
};
