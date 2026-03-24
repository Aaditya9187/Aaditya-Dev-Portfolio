import projectEcommerce from "@/assets/GoCart.png";
import projectPortfolio from "@/assets/maos-portfolio.png";
import projectFittrack from "@/assets/FitTrack.png";
import projectSpott from "@/assets/Spott.png";
import projectSkywings from "@/assets/skywings.png"
import projectStarbucks from "@/assets/Starbucks-landing-page.png"

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
    id: "multi-vendor-e-commerce-website",
    title: "Multi Vendor E-Commerce Website",
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
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A macOS-inspired interactive developer portfolio with draggable windows, built-in apps, and smooth GSAP animations to showcase projects and skills. 💻🚀",
    longDescription:
      "This project is a macOS-inspired interactive developer portfolio that recreates the experience of using a real desktop operating system directly inside the browser. Instead of a traditional scrolling website, the portfolio behaves like a mini operating system where users can open applications, move windows around the screen, and explore different sections just like they would on a Mac. The interface includes familiar elements such as a macOS-style dock, window controls, draggable and minimizable application windows, and smooth desktop-like interactions, creating a highly immersive and memorable way to present projects and skills. The portfolio contains multiple built-in applications that represent different sections of the developer’s work and information. Visitors can open a Projects app to explore development work, a Music Player with playlist functionality, a Photo Gallery with a masonry layout for visual content, a Resume Viewer for professional details, and a Contact app for reaching out. It also features creative applications such as a VS Code-style IDE for displaying code, a Terminal window that showcases the developer’s tech stack in a command-line format, a Finder-style file explorer, and a Safari-like blog browser. Each application runs inside draggable desktop windows, allowing users to interact with the portfolio in a playful yet professional way. To enhance the realism and responsiveness of the interface, the project uses GSAP animations with the Draggable plugin to power fluid window movement, transitions, and micro-interactions across the system. The layout and visual design are built with Tailwind CSS 4, ensuring a modern, clean, and highly customizable styling system. State management for window positions, application states, and desktop interactions is handled efficiently using Zustand, allowing the interface to remain fast and responsive even with multiple apps open. The application is developed using React 19 for building the component-driven UI architecture and Vite 7 as the build tool to provide extremely fast development and optimized production builds. Visual elements and interface icons are implemented with Lucide React, giving the system a crisp and consistent icon set. Typography is powered by Google Fonts, specifically Georama for modern UI text and Roboto Mono for terminal and code-style elements, reinforcing the desktop developer environment aesthetic. Overall, this project transforms a traditional portfolio into a fully interactive desktop experience, blending creative UI design with modern frontend technologies to create a unique, engaging, and technically impressive way for visitors to explore a developer’s work. 🚀💻",
    tags: ["React.js", "Vite", "Tailwind CSS", "GSAP"],
    cover_image: projectPortfolio,
    gallery: [projectPortfolio],
    github_url: "https://github.com/Aaditya9187/Aaditya-MacOs-Portfolio",
    live_url: "https://aaditya-creates.vercel.app/",
    features: [
      "Optimized for desktop viewing only",
      "MacOS-Inspired UI",
      "Window Management",
      "Photo Gallery with masonry layout",
      "Resume Viewer",
      "Projects Showcase",
      "Contact Information",
      "Blog/Safari Browser",
      "Terminal with Tech Stack",
      "Finder File Explorer",
      "Smooth Animations",
      "Terminal with Tech Stack",
    ],
  },
  {
    id: "ai-fitness-tracker",
    title: "AI Fitness Tracker",
    description:
      "An AI-powered fitness tracker that helps users track calories, activities, and daily goals, with smart food analysis using Google Gemini AI. 💪🤖",
    longDescription:
      "This project is an AI-powered fitness tracking web application designed to help users monitor their health, nutrition, and daily physical activities in a simple and intelligent way. The platform allows users to set personalized daily fitness goals and track their progress by recording both calories consumed through food and calories burned through physical activities. By bringing all essential fitness tracking tools into a single dashboard, the application makes it easier for users to stay aware of their daily habits and maintain a balanced lifestyle. One of the key highlights of the platform is its AI-powered food tracking system. Instead of manually entering food details, users can simply upload an image of their meal. The system then analyzes the image using Google Gemini AI, identifies the food, and estimates the nutritional information and calories. This feature makes nutrition tracking significantly faster, smarter, and more convenient for everyday users. The application also includes a secure user authentication system, allowing users to create accounts, sign in, and manage their personal fitness data. Each user has a profile where they can update their personal information and track their progress over time. This personalized experience ensures that every user's data and fitness journey remain organized and accessible. From a technical perspective, the frontend of the application is built using React JS, providing a fast, dynamic, and responsive user interface. The backend is powered by Strapi, a headless CMS that handles API management, user authentication, and database interactions efficiently. The visual design and layout are created using Tailwind CSS, which enables a modern, clean, and responsive interface that works smoothly across devices. For the AI capabilities, the application integrates Google Gemini AI, which performs the food image recognition and nutritional analysis. The project is also deployed entirely using free cloud platforms, with the frontend hosted on Vercel and the backend running on Strapi Cloud, making the application accessible online without requiring paid infrastructure. Overall, this project demonstrates how AI technology and modern web development tools can be combined to build an intelligent health and fitness platform that simplifies calorie tracking, improves nutrition awareness, and helps users stay committed to their fitness goals. 💪🤖",
    tags: ["React.js", "Tailwind CSS", "Strapi", "Google Gemini AI"],
    cover_image: projectFittrack,
    gallery: [projectFittrack],
    github_url: "https://github.com/Aaditya9187/FitTrack",
    live_url: "https://fittrack-live.vercel.app/",
    features: [
      "Set daily fitness goals",
      "Track food intake (calories consumed)",
      "Track fitness activities (calories burned)",
      "User authentication (Sign up / Sign in)",
      "Update user profile data",
      "AI-powered food tracking by uploading food images",
      "Food image analysis using Google Gemini AI",
      "Uses Strapi – Headless CMS & Backend API",
    ],
  },
  {
    id: "ai-event-organizer",
    title: "AI Event Organizer",
    description:
      "An AI-powered event organizer that automates event creation, ticketing, and attendee management with QR-based check-ins and smart analytics. 🎟️🤖",
    longDescription:
      "AI Event Organizer is an intelligent web platform designed to simplify and modernize the entire event planning and management process. The platform leverages artificial intelligence to automate many of the time-consuming tasks involved in organizing events, making it easier for individuals, businesses, and teams to create, manage, and execute successful events. Whether the event is a conference, workshop, seminar, meetup, or social gathering, the system provides powerful tools that streamline planning while improving the overall experience for both organizers and attendees. One of the core capabilities of the platform is AI-powered event creation. Instead of manually structuring every detail, the system helps generate event pages, schedules, and agendas intelligently based on the event type and audience. This allows organizers to quickly launch well-structured events while maintaining a professional presentation. The platform focuses on reducing manual effort and enabling faster event setup through automation and smart suggestions. The system also includes a fully integrated ticket booking and verification system. When attendees register for an event, they receive secure digital tickets that contain unique QR codes. These QR codes can be scanned during entry for quick and contactless check-ins, ensuring smooth attendee flow and enhanced security during the event. This feature helps organizers manage large numbers of participants efficiently while minimizing manual verification processes. Another key component is attendee management and tracking. The platform allows organizers to monitor registrations, manage guest lists, and organize attendee data from a centralized dashboard. This makes it easier to keep track of participants, handle communications, and maintain an organized overview of the entire event. To support better decision-making, the platform provides real-time analytics and reporting tools. Organizers can monitor data such as ticket bookings, attendance trends, and participant engagement. These insights help improve planning strategies for future events while allowing adjustments during ongoing events if necessary. The platform is designed with a clean, user-friendly interface that ensures accessibility even for users who may not have technical expertise. The intuitive dashboard allows organizers to create events, share booking links, track attendees, and manage event operations from a single centralized environment. Overall, AI Event Organizer demonstrates how artificial intelligence and modern web technologies can transform traditional event planning into a faster, smarter, and more efficient process. By combining automation, digital ticketing, attendee management, and real-time insights, the platform provides a complete solution for managing events in a modern and scalable way. 🚀🎟️",
    tags: ["Next.js", "Shadcn UI", "Convex", "Clerk"],
    cover_image: projectSpott,
    gallery: [projectSpott],
    github_url: "https://github.com/Aaditya9187/spott",
    live_url: "https://spott-zeta.vercel.app/",
    features: [
      "AI-Powered Event Creation",
      "Online Ticket Booking System",
      "QR Code Ticket Verification",
      "Real-Time Analytics & Insights",
      "Attendee Management Dashboard",
      "User-Friendly Event Management Interface",
    ],
  },
  {
    id: "travel-agency-static-website",
    title: "Travel Agency Static Website",
    description:
      "A modern travel agency website featuring destination showcases, booking sections, and a clean responsive static website. ✈️🌍",
    longDescription:
      "SkyWings is a modern and visually engaging travel agency website designed to inspire users to explore destinations and plan their journeys with ease. The website features a large hero section with an airplane visual, a strong headline, and a call-to-action that encourages users to start their travel planning. It includes well-structured navigation with sections like Home, About, Tours, Packages, and Contact, allowing visitors to easily explore the platform. The site showcases popular travel destinations through visually appealing cards that highlight different locations with images, ratings, and brief details to attract travelers. It also presents key service highlights such as seamless booking processes, personalized travel itineraries, and expert local insights to build trust and demonstrate the value of the travel agency. Additional sections include engaging travel content, statistics showing years of experience and happy clients, and testimonials from travelers that strengthen credibility and user confidence. The website concludes with a structured footer containing quick links, contact information, social media icons, and a subscription form for updates. Built using HTML and CSS, the project demonstrates strong frontend development skills including clean layout design, visual hierarchy, and modern UI structure to create a professional travel agency web experience. ✈️🌍",
    tags: ["HTML", "CSS", "JavaScript"],
    cover_image: projectSkywings,
    gallery: [projectSkywings],
    github_url: "https://github.com/Aaditya9187/skywings",
    live_url: "https://aaditya9187.github.io/skywings/",
    features: [
      "Attractive Hero Section",
      "Popular Destinations Showcase",
      "Service Highlights Section",
      "Traveler Testimonials",
      "Statistics & Achievements",
      "Clean Navigation & Footer",
    ],
  },
  {
    id: "starbucks-landing-page",
    title: "Starbucks Landing Page",
    description:
      "A modern landing page for Starbucks featuring product showcases, promotional sections, and a clean responsive design. ☕",
    longDescription:
      "A modern Starbucks-inspired landing page designed to showcase a coffee brand with a clean, stylish, and engaging user interface. The website features a visually appealing hero section, product highlights, and promotional content that captures the essence of a modern café brand. It focuses on presenting coffee products, brand identity, and featured drinks in an attractive layout that enhances the overall user experience. The page is structured with well-organized sections, smooth visual hierarchy, and a responsive design that ensures a seamless browsing experience across different devices. Built using HTML and CSS, the project demonstrates strong frontend development skills including layout design, modern UI styling, and effective use of typography and imagery to create a professional landing page for a coffee brand. ☕✨",
    tags: ["HTML", "CSS", "JavaScript"],
    cover_image: projectStarbucks,
    gallery: [projectStarbucks],
    github_url: "https://github.com/Aaditya9187/starbucks-landing-page",
    live_url: "https://aaditya9187.github.io/starbucks-landing-page/",
    features: [
      "Modern Hero Section",
      "Product Showcase",
      "Clean & Minimal UI Design",
      "Responsive Layout",
      "Smooth Navigation Structure",
      "Brand-Focused Design",
    ],
  },
];
