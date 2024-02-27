import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gigalinkLogo,
  ipinfraLogo,
  a1qaLogo,
  carrent,
  jobit,
  tripguide,
  threejs,
  phpLogo,
  mysqlLogo,
  allureLogo,
  jenkinsLogo,
  pythonLogo,
  djangoLogo,
  javaLogo,
  flutterLogo,
  gptWebsite,
  restaurantWebsite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "QA Software Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: javaLogo,
  },
  {
    name: "Python",
    icon: pythonLogo,
  },
  {
    name: "Django",
    icon: djangoLogo,
  },
  {
    name: "Flutter",
    icon: flutterLogo,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "php",
    icon: phpLogo,
  },
  {
    name: "MySQL",
    icon: mysqlLogo,
  },
  // {
  //   name: "Allure",
  //   icon: allureLogo,
  // },
  // {
  //   name: "Jenkins",
  //   icon: jenkinsLogo,
  // },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Gigalink Solutions Sdn Bhd",
    icon: gigalinkLogo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tags: [
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "MySQL",
        color: "docker-text-gradient",
      },
      {
        name: "PHP",
        color: "php-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    title: "Software Developer",
    company_name: "Ipinfra Networks Sdn Bhd",
    icon: ipinfraLogo,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Aug 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tags: [
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "PHP",
        color: "php-text-gradient",
      },
      {
        name: "React",
        color: "react-text-gradient",
      },
      {
        name: "MySQL",
        color: "docker-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
      {
        name: "IoT",
        color: "iot-text-gradient",
      },
      {
        name: "TTN",
        color: "iot-text-gradient",
      },
      {
        name: "Sensor",
        color: "iot-text-gradient",
      },
    ],
  },
  {
    title: "QA Test Automatin Engineer",
    company_name: "A1QA",
    icon: a1qaLogo,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tags: [
      {
        name: "Java",
        color: "yellow-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Jerkins",
        color: "jerkins-text-gradient",
      },
      {
        name: "BDD",
        color: "green-text-gradient",
      },
      {
        name: "Allure",
        color: "allure-text-gradient",
      },
      {
        name: "Docker",
        color: "docker-text-gradient",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AbdulQader496/car_rent_website",
  },
  {
    name: "Web GPT",
    description:
      "Web application that enables GPT to promote new AI which acts as a patform for new text based AI. It shows the use for different view to make a website with react.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gptWebsite,
    source_code_link: "https://github.com/AbdulQader496/react-web-gpt",
  },
  {
    name: "Restaurant website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurantWebsite,
    source_code_link: "https://github.com/AbdulQader496/restaurant_web_react",
  },
];

export { services, technologies, experiences, testimonials, projects };
