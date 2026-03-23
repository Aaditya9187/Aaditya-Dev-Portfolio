import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectIot from "@/assets/project-iot.jpg";
import projectTaskmanager from "@/assets/project-taskmanager.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  cover_image: string;
  gallery: string[];
  github_url: string;
  live_url: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A modern admin dashboard with real-time analytics, inventory management, and responsive charts built for an online store.",
    longDescription:
      "Built from the ground up to give store owners complete visibility into their business. The dashboard features real-time sales analytics with interactive Recharts graphs, a full inventory management system with CRUD operations, order tracking with status pipelines, and customer insights. The backend is powered by Node.js with Express and connects to a PostgreSQL database. The responsive layout adapts seamlessly from desktop monitors to tablets.",
    tags: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    cover_image: projectEcommerce,
    gallery: [projectEcommerce],
    github_url: "#",
    live_url: "#",
    features: [
      "Real-time sales & revenue analytics",
      "Inventory management with search & filters",
      "Order tracking pipeline",
      "Customer segmentation insights",
      "Responsive design for all devices",
    ],
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    description:
      "A clean, animated portfolio template for developers and designers with dark mode, smooth scroll, and dynamic sections.",
    longDescription:
      "A highly customisable portfolio starter designed for creative developers. It ships with Framer Motion page transitions, a dark / light theme toggle backed by CSS variables, scroll-triggered section reveals, and a modular component architecture so sections can be reordered or swapped out easily. Every animation is GPU-accelerated for buttery 60 fps performance even on low-end devices.",
    tags: ["React", "Framer Motion", "TypeScript"],
    cover_image: projectPortfolio,
    gallery: [projectPortfolio],
    github_url: "#",
    live_url: "#",
    features: [
      "Framer Motion page transitions",
      "Dark / light theme toggle",
      "Scroll-triggered section reveals",
      "Modular, reorderable sections",
      "SEO-optimised with meta tags",
    ],
  },
  {
    id: "smart-home-iot",
    title: "Smart Home IoT Controller",
    description:
      "Web-based IoT dashboard to control home devices remotely using Arduino and MQTT protocol with real-time status updates.",
    longDescription:
      "This project bridges hardware and software by letting users monitor and control smart-home devices from any browser. An Arduino Mega collects sensor data (temperature, humidity, motion) and publishes it over MQTT. The Express backend subscribes to those topics and pushes live updates to the React frontend via WebSockets. Users can toggle lights, fans, and locks with instant feedback and view historical sensor graphs.",
    tags: ["JavaScript", "Arduino", "MQTT", "Express"],
    cover_image: projectIot,
    gallery: [projectIot],
    github_url: "#",
    live_url: "#",
    features: [
      "Live sensor data via MQTT + WebSockets",
      "Toggle devices remotely",
      "Historical sensor data charts",
      "Multi-room device grouping",
      "Configurable automation rules",
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A full-stack Kanban-style task manager with drag-and-drop, user authentication, and cloud sync capabilities.",
    longDescription:
      "A productivity tool inspired by Trello and Notion. Users can create boards, add columns, and drag tasks between them with smooth animations powered by dnd-kit. Authentication is handled via JWT with refresh tokens stored in HTTP-only cookies. All data is persisted in MongoDB Atlas and synced in real time across tabs using change streams. The UI is fully responsive and supports keyboard navigation for accessibility.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    cover_image: projectTaskmanager,
    gallery: [projectTaskmanager],
    github_url: "#",
    live_url: "#",
    features: [
      "Drag-and-drop Kanban boards",
      "JWT authentication with refresh tokens",
      "Real-time sync across tabs",
      "Keyboard-accessible UI",
      "Cloud-synced to MongoDB Atlas",
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A full-stack Kanban-style task manager with drag-and-drop, user authentication, and cloud sync capabilities.",
    longDescription:
      "A productivity tool inspired by Trello and Notion. Users can create boards, add columns, and drag tasks between them with smooth animations powered by dnd-kit. Authentication is handled via JWT with refresh tokens stored in HTTP-only cookies. All data is persisted in MongoDB Atlas and synced in real time across tabs using change streams. The UI is fully responsive and supports keyboard navigation for accessibility.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    cover_image: projectTaskmanager,
    gallery: [projectTaskmanager],
    github_url: "#",
    live_url: "#",
    features: [
      "Drag-and-drop Kanban boards",
      "JWT authentication with refresh tokens",
      "Real-time sync across tabs",
      "Keyboard-accessible UI",
      "Cloud-synced to MongoDB Atlas",
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A full-stack Kanban-style task manager with drag-and-drop, user authentication, and cloud sync capabilities.",
    longDescription:
      "A productivity tool inspired by Trello and Notion. Users can create boards, add columns, and drag tasks between them with smooth animations powered by dnd-kit. Authentication is handled via JWT with refresh tokens stored in HTTP-only cookies. All data is persisted in MongoDB Atlas and synced in real time across tabs using change streams. The UI is fully responsive and supports keyboard navigation for accessibility.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    cover_image: projectTaskmanager,
    gallery: [projectTaskmanager],
    github_url: "#",
    live_url: "#",
    features: [
      "Drag-and-drop Kanban boards",
      "JWT authentication with refresh tokens",
      "Real-time sync across tabs",
      "Keyboard-accessible UI",
      "Cloud-synced to MongoDB Atlas",
    ],
  },
];
