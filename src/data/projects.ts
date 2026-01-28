export interface Project {
  id: number;
  position: string;
  location: string;
  company: string;
  date: string;
  title: string;
  description: string;
  responsibilities: string[];
}

const projects: Project[] = [
  {
    id: 0,
    position: "Software Developer & Consultant",
    location: "Chicago, IL",
    company: "Atomic Object",
    date: "Jan 2024 – Sep 2025",
    title: "Virtual Dialog Web Platform",
    description:
      "This platform supports organizations running virtual seminars, structured dialogs, and interactive events by enabling real-time communication between participants. It delivers a consistent, engaging experience across devices while supporting reliable message delivery and state synchronization for large groups of concurrent users.",
    responsibilities: [
      "Developed a responsive real-time communication platform for dialogs, seminars, and events using Node.js, React and TypeScript, support live updates across clients",
      "Worked with backend engineers to design and reason about WebSocket-based communication, including connection lifecycles, message schemas, and server-side event broadcasting",
      "Engineered modular, reusable UI components representing dialog roles, actions, and event flows, improving maintainability and feature scalability",
      "Designed a scalable state management structure using Redux to synchronize user sessions, dialog states, and real-time events received from the backend",
      "Integrated Leaflet.js and other third-party libraries to enhance interactive features and extend reusable component patterns",
      "Implemented debouncing, throttling, memoization, and batched state updates to reduce render frequency, minimize network traffic, and maintain stable performance under high concurrency",
      "Collaborated with backend engineers to integrate REST endpoints alongside WebSocket events using Axios and Zod for type-safe, validated data flows",
      "Automated CI/CD workflows using GitHub Actions and shell scripts to support consistent builds, testing, static analysis, and deployment",
      "Participated actively in daily standups, code reviews, and sprint planning, contributing to cross-functional collaboration and iterative feature delivery",
    ],
  },
  {
    id: 1,
    position: "Frontend Developer",
    location: "Northbrook, IL",
    company: "Crate & Barrel",
    date: "Jul 2022 – Dec 2023",
    title: "Statistics Dashboard",
    description:
      "The statistics dashboard was designed to help product teams quickly understand performance trends and make data-driven decisions. It consolidates key metrics into a clear, navigable interface, enabling stakeholders to visualize insights without needing technical expertise.",
    responsibilities: [
      "Built an intuitive, responsive dashboard for detailed product statistics and visualizations using React, TailwindCSS, Redux, and TypeScript, closely following Figma design specifications",
      "Implemented structured routing and page hierarchy using React Router to create a clear navigation flow and user-friendly layout",
      "Developed reusable, customizable chart components using chart.js to streamline backend integration and support multiple data visualization types",
      "Collaborated with backend engineers to optimize API usage by shaping request parameters, reducing payload sizes, and coordinating efficient data-fetching strategies",
      "Used Redux to manage scalable, shared application state and applied targeted React optimization techniques to reduce API calls and improve render performance",
      "Implemented client- and server-aware optimizations such as request batching, caching strategies, and debounced data refreshes to reduce backend load",
      "Introduced loading states, skeleton UIs, and error boundaries to improve perceived performance and overall user experience during asynchronous data fetches ",
      "Added lightweight integration tests for critical components to validate data flow, chart rendering, and navigation behavior during iterative development",
      "Translated Figma prototypes into responsive components through close collaboration with designers and other front-end developers ",
    ],
  },
  {
    id: 2,
    position: "Frontend Developer",
    location: "Remote",
    company: "Velvetech",
    date: "May 2020 – April 2022",
    title: "Project Management Platform",
    description:
      "This project management platform streamlines how teams track projects, allocate resources, and coordinate ongoing work. It is used by managers and team members to visualize workloads, update progress, and reduce inefficiencies in planning and communication.",
    responsibilities: [
      "Developed an interactive web application for project and resource management using React, Redux, TypeScript, and Material UI, ensuring a scalable and maintainable front-end architecture",
      "Built a fully responsive layout leveraging both flexboxes and grids in CSS to support diverse screen sizes and devices",
      "Optimized application performance through React and Redux best practices, including component memoization, selective re-renders, and code splitting",
      "Created dynamic, feature-rich, reusable components by composing and customizing Material UI elements for consistent design and improved development efficiency",
      "Refactored a backlog of legacy React class components into functional components with hooks, improving readability, maintainability, and state management",
      "Implemented form validation, inline feedback, and interactive UI behaviors to enhance usability and ensure data integrity",
      "Participated actively in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives, while contributing to internal documentation and knowledge sharing",
    ],
  },
];

export default projects;
