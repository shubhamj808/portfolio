import { Html } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  web,

  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  kubernetes,
  java,
  dotnet,
  azure,
  prometheus,
  elastic,
  terraform,
  spring,
  argocd,
  jenkins,
  tailwind,
  mysql,
  grafana,
  html,
  css,
  postgres,
  githubActions,
  azureDevops,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Automation",
    icon: web,
  },
  {
    title: "Containerization",
    icon: mobile,
  },
  {
    title: "Orchestration",
    icon: backend,
  },
  {
    title: "Monitoring",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Microsoft Azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "ArgoCD",
    icon: argocd,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Grafana",
    icon: grafana,
  },

  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "Elasticsearch",
    icon: elastic,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "Spring boot",
    icon: spring,
  },
  
  {
    name: "Java",
    icon: java,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Github Actions",
    icon: githubActions,
  },
  {
    name: "Azure Devops",
    icon: azureDevops,
  },
];

const tools = [
  {
    title: "Frontend",
    skills: [
      {
        name: "ReactJS",
        icon: reactjs,
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },

    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Spring Boot",
        icon: spring,
      },
      {
        name: "MySQL",
        icon: mysql,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "PostgreSQL",
        icon: postgres,
      },
      {
        name: "dotnet",
        icon: dotnet,
      },
      {
        name: "Java",
        icon: java,
      }
    ],
  },
  {
    title: "CI/CD",
    skills: [
      {
        name: "Github Actions",
        icon: githubActions,
      },
      {
        name: "Jenkins",
        icon: jenkins,
      },
      {
        name: "ArgoCD",
        icon: argocd,
      },
      {
        name: "Azure Devops",
        icon: azureDevops,
      },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      {
        name: "Prometheus",
        icon: prometheus,
      },
      {
        name: "Grafana",
        icon: grafana,
      },
      {
        name: "Elasticsearch",
        icon: elastic,
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Microsoft Azure",
        icon: azure,
      },
      {
        name: "docker",
        icon: docker,
      },
      {
        name: "Kubernetes",
        icon: kubernetes,
      },
      {
        name: "Terraform",
        icon: terraform,
      },
    ],
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, tools, technologies, experiences, testimonials, projects };
