import projectEcommerce from "@/assets/GoCart.png";
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
      "Go-Cart is a multivendor e-commerce marketplace where multiple sellers can list products, manage inventory, and process orders from a single platform.",
    longDescription: "This project is a full-featured Multi-Vendor E-Commerce Platform built with Next.js, developed and designed to deliver a fast and frictionless shopping experience. It integrates secure authentication using Clerk, background job processing with Inngest, and cloud-based image management via ImageKit. All application data is stored in a PostgreSQL database powered by Neon, ensuring reliability and performance. Users can create their own stores and sell products online. Every new store requires admin approval, maintaining platform quality and trust. Seamless login and account management are handled using Clerk, ensuring a smooth and secure user experience. A powerful admin panel allows administrators to: Approve or reject vendor stores, Manage discount coupons, Monitor platform activity, Control vendor permissions. Premium plans are implemented through subscription billing, enabling vendors to unlock advanced features. Product purchases are processed securely using Stripe, supporting modern and reliable payment workflows. After development, the application is deployed for free on Vercel, making it accessible online with high performance and global availability. Think of it as a lightweight Amazon-style interface built specifically for speed, usability, and real-world performance.",
    tags: ["Next.js", "Tailwind CSS", "Lucide React for icons", "Redux Toolkit"],
    cover_image: projectEcommerce,
    gallery: [projectEcommerce],
    github_url: "https://github.com/Aaditya9187/gocart",
    live_url: "https://gocart-blush.vercel.app/",
    features: [
      "Real-time sales & revenue analytics",
      "Inventory management with search & filters",
      "Order tracking pipeline",
      "Customer segmentation insights",
      "Live stripe payment processing",
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
