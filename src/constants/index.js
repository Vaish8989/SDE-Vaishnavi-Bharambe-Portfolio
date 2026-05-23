import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Certifications",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Frontend Engineering",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "REST API Development",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Govindani Infotech",
    icon: creator,
    iconBg: "#111111",
    date: "Present | Pune",
    points: [
      "Developing scalable full stack applications using React JS and Java Spring Boot",
      "Building responsive frontend interfaces and RESTful APIs",
      "Working with PostgreSQL and MySQL databases",
      "Integrated cloud-based storage and delivery solutions using AWS, Azure Blob Storage and Cloudflare for optimized media handling, performance and scalability",
      "Independently developed babajikibuti.com frontend and backend",
      "API testing using Postman and version control with GitHub"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Wynisco Inc.",
    icon: web,
    iconBg: "#0a0a0a",
    date: "Aug 2024 - Oct 2025 | Pune",
    points: [
      "Developed responsive React JS interfaces",
      "Built reusable React components",
      "Worked with hooks and component-based architecture",
      "Integrated REST APIs with frontend applications",
      "Collaborated with backend team using GitHub workflows",
      "Promoted from intern to full-time employee within 3 months"
    ],
  },
];

const achievements = [
  {
    title: "Microsoft AWS Fundamentals",
    company_name: "Udemy",
    icon: coursera,
    iconBg: "#111111",
    date: "2024",
    points: ["Certification"],
  },
  {
    title: "Java Full Stack Development",
    company_name: "QSpider",
    icon: fcc,
    iconBg: "#0a0a0a",
    date: "2024",
    points: ["Certification"],
  }
];

const education = [
  {
    title: "Bachelor of Engineering — E&TC",
    company_name: "Smt. Kashibai Navale Sinhagad College of Engineering",
    icon: coursera,
    iconBg: "#111111",
    date: "SPPU Pune | CGPA: 8.78",
    points: ["Electronics & Telecommunication", "Graduated with First Class with Distinction"],
  },
  {
    title: "Diploma — E&TC",
    company_name: "Government Polytechnic Khamgaon",
    icon: fcc,
    iconBg: "#0a0a0a",
    date: "Percentage: 83.20%",
    points: ["Electronics & Telecommunication"],
  },
  {
    title: "Java Full Stack Development Program",
    company_name: "QSpiders",
    icon: hr,
    iconBg: "#111111",
    date: "Completed",
    points: ["Intensive Full Stack Training"],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but genZcoder proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Babaji Ki Buti",
    description:
      "A full-stack e-commerce platform with React JS frontend and Java Spring Boot backend. Features include REST APIs, PostgreSQL database, product management, and integrated Azure Blob Storage, AWS S3 and Cloudflare CDN for optimized media delivery.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Java Spring Boot", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "AWS", color: "orange-text-gradient" },
    ],
    image: "/public/Images/babaji.png",
    source_code_link: "https://github.com/",
    live_link: "https://www.babajikibuti.com/",
  },
  {
    name: "Govindani Infotech — Official Website",
    description:
      "Designed and developed the official corporate website independently from scratch. Built with React JS, JavaScript, HTML5 and CSS3. Features smooth animations, responsive layout, and deployed on Hostinger with Cloudflare for CDN and performance.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "Cloudflare", color: "pink-text-gradient" },
      { name: "Hostinger", color: "orange-text-gradient" },
    ],
    image: "/public/Images/GIIT.png",
    source_code_link: "https://github.com/",
    live_link: "https://govindaniit.com/",
  },
  {
    name: "Gllora",
    description:
      "A Shopify storefront with a fully customized theme, responsive UI design, and integrated payment functionality. Delivered an enhanced mobile shopping experience, optimized product pages and smooth checkout flow for end users.",
    tags: [
      { name: "Shopify", color: "blue-text-gradient" },
      { name: "Liquid", color: "green-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
      { name: "CSS3", color: "orange-text-gradient" },
    ],
    image: "/public/Images/Gllora.png",
    source_code_link: "https://github.com/",
    live_link: "https://gllora.com/",
  },
  {
    name: "Employee Management System",
    description:
      "A comprehensive RESTful backend application for managing employees and departments. Built with Spring Boot and Hibernate, this system provides complete CRUD operations with MySQL for persistent data storage.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "Hibernate", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: "/public/Images/Employee.jpg",
    source_code_link: "https://github.com/Vaish8989/Employee-Management-using-Spring-Boot",
  },
  {
    name: "Login & Registration System",
    description:
      "A web-based user authentication system that allows users to register new accounts and log in securely. Built using classic Java web technologies including JSP, Servlets, and JDBC for database connectivity.",
    tags: [
      { name: "JSP", color: "blue-text-gradient" },
      { name: "Servlets", color: "green-text-gradient" },
      { name: "JDBC", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: "/public/Images/login.jpg",
    source_code_link: "https://github.com/Vaish8989/Login-and-Registration-using-JSP-Servlet-JDBC-MYSQL",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  { text: "Concepts", imgPath: concepts, font: "'Courier New', Courier, monospace" },
  { text: "Designs", imgPath: designs, font: "'Times New Roman', Times, serif" },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
];

export { achievements, projects, services, testimonials, words, experiences, education };
