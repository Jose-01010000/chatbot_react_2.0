import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  perzonalizacion,
  accesibilidad,
  retroalimentacion,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "features",
    title: "Características",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: perzonalizacion,
    title: "Personalización",
    content:
      "InterviewBuddy puede personalizar su entrenamiento según el nivel de experiencia del usuario y el tipo de trabajo al que está postulando.",
  },
  {
    id: "feature-2",
    icon: accesibilidad,
    title: "Accesibilidad",
    content:
      "InterviewBuddy está disponible las 24 horas del día, los 7 días de la semana, lo que significa que los usuarios pueden acceder al entrenamiento en cualquier momento y desde cualquier lugar.",
  },
  {
    id: "feature-3",
    icon: retroalimentacion,
    title: "Retroalimentación",
    content:
      "InterviewBuddy puede proporcionar retroalimentación inmediata a los usuarios sobre su desempeño en las simulaciones de entrevistas.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      '"Gracias a InterviewBuddy pude practicar para mi entrevista de trabajo de forma efectiva. Me ayudó a sentirme más seguro y preparado para enfrentar la entrevista".',
    name: "Juan",
    title: "Ingeniero de Software - junior",
    img: people03,
  },
  {
    id: "feedback-2",
    content:
      '"Quiero agradecer a InterviewBuddy por su ayuda. Me brindó consejos personalizados y me permitió practicar en simulaciones de entrevistas."',
    name: "Pedro",
    title: "Ingeniero de sistemas - senior",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      'InterviewBuddy fue una herramienta muy útil para mi. Me proporcionó consejos valiosos y me permitió practicar simulaciones de entrevistas, lo que me ayudó a mejorar mi desempeño en las entrevistas reales".',
    name: "Andrea",
    title: "Ingeniero de software - trainee",
    img: people01,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Usuarios activos",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Compañias",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Entrevistas",
    value: "30.000+",
  },
];

export const footerLinks = [
  {
    title: "Enlaces útiles",
    links: [
      {
        name: "Contenido",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Como funciona",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Crea entrevistas",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explora",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terminos y condiciones",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Comunidad",
    links: [
      {
        name: "Centro de ayuda",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Patrocinadores",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Sugerenias",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Noticias",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Patrocinadores",
    links: [
      {
        name: "Nustros patrocinadores",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Convertirse en patrocinador",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const questionPsicologicas = [
  {
    id: "question-1",
    question: "¿Qué puedes decirme sobre ti?",
    answer:
      "Me considero una persona muy responsable, comprometida y con ganas de aprender. Me gusta trabajar en equipo y me considero una persona muy sociable. Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias. Me considero una persona muy responsable, comprometida y con ganas de aprender. Me gusta trabajar en equipo y me considero una persona muy sociable. Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias.",
  },
  {
    id: "question-2",
    question: "¿Por qué has elegido este camino profesional?",
    answer:
      "Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias.",
  },
  {
    id: "question-3",
    question: "¿Cuáles consideras que son tu mayor fortaleza y debilidad?",
    answer:
      "Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias.",
  },
  {
    id: "question-4",
    question: "¿Cuál es tu proyecto profesional?",
    answer:
      "Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias.",
  },
  {
    id: "question-5",
    question: "¿Qué te gustaría mejorar de ti mismo?",
    answer:
      "Me gusta mucho la tecnología y me gusta estar al día con las últimas tendencias.",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const helpers = [
  {
    id: "numeroPreguntas",
    value: 5,
  },
];

export const retroalimentacionText = (score) => {
  let retroalimentacion = "";
  if (score > 0 && score <= 3) {
    retroalimentacion =
      "La comunicación fue deficiente y poco clara. Te recomendaría trabajar en mejorar tu comunicación verbal y no verbal. Asegúrate de ser conciso y estructurado al responder las preguntas, evitando respuestas vagas o poco fundamentadas. Necesitas trabajar en tu capacidad para responder preguntas de manera más completa y detallada.";
  } else if (score > 3 && score <= 6) {
    retroalimentacion =
      "Hubo momentos en los que no te expresaste de manera clara. Trata de ser más conciso/a y estructurado/a en tus respuestas. Tu forma de expresarte mostró cierta falta de confianza. También asegúrate de proporcionar ejemplos concretos y relevantes al responder las preguntas. Esto ayudará a respaldar tus afirmaciones y demostrar tu experiencia.";
  } else if (score > 6 && score <= 9) {
    retroalimentacion =
      "Tu expresión durante la entrevista es buena y demuestras un nivel adecuado de confianza y claridad al responder. Sigue trabajando en la elaboración de respuestas sólidas y estructuradas. Asegúrate de abordar todos los puntos clave de cada pregunta y utiliza ejemplos para demostrar tus habilidades relevantes para el puesto.";
  } else if (score === 10) {
    retroalimentacion =
      "¡Tus habilidades blandas son excepcionales! Has demostrado un dominio sobresaliente en esta área, lo cual es muy valioso en el campo de la ingeniería de sistemas.";
  }
  return retroalimentacion;
};
