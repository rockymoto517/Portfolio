import { Separator } from "@/components/ui/separator";
import {
  CSS3,
  HTML5,
  NodeJs,
  NPM,
  React,
  Redux,
  TailwindCSS,
  TypeScript,
} from "developer-icons";
import { Link } from "react-router";

export default function Index() {
  return (
    <>
      <h1 className="text-center text-3xl">Hasan Ershaid</h1>
      <div className="mx-3 my-6 sm:my-0 flex justify-center space-x-2 sm:space-x-3">
        <span>773-572-1812</span>
        <Separator orientation="vertical" />
        <span>Chicago, IL</span>
        <Separator orientation="vertical" />
        <a
          className="hover:text-muted-foreground duration-100"
          href="mailto:hasan.ershaid90@gmail.com"
        >
          hasan.ershaid90@gmail.com
        </a>
        <Separator orientation="vertical" />
        <a
          className="hover:text-muted-foreground duration-100"
          href="https://www.linkedin.com/in/hasan-ershaid-6271053a1/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <Link
          to="https://html.spec.whatwg.org/multipage/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <HTML5 size={48} />
        </Link>
        <Link
          to="https://www.w3.org/Style/CSS/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <CSS3 size={48} />
        </Link>
        <Link
          to="https://nodejs.org"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <NodeJs size={48} />
        </Link>
        <Link
          to="https://www.npmjs.com/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <NPM size={48} />
        </Link>
        <Link
          to="https://www.typescriptlang.org/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <TypeScript size={48} />
        </Link>
        <Link
          to="https://react.dev/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <React size={48} />
        </Link>
        <Link
          to="https://redux.js.org/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <Redux size={48} />
        </Link>
        <Link
          to="https://tailwindcss.com/"
          className="duration-150 ease-in hover:grayscale-100"
          target="_blank"
        >
          <TailwindCSS size={48} />
        </Link>
      </div>
      <ul className="mx-auto w-3/4 sm:w-3/8 space-y-1 list-disc">
        <li>
          Five years of experience building and supporting full-stack web
          applications with a focus on Node.js backend services and modern
          front-end development using React and TypeScript
        </li>
        <li>
          Designed and implemented RESTful APIs using Node.js, handling
          authentication, authorization, validation, and error handling to
          support scalable client applications
        </li>
        <li>
          Strong experience with asynchronous and event-driven programming using
          async/await and promises to build efficient, non-blocking backend
          logic
        </li>
        <li>
          Structured backend systems using modular architectures, separating
          routing, business logic, and data access layers to improve
          maintainability and testability
        </li>
        <li>
          Built responsive, user-facing interfaces with React, leveraging
          reusable components and hooks to deliver performant and maintainable
          front-end experiences
        </li>
        <li>
          Managed shared application state using Redux and Redux Toolkit to
          coordinate data flow between backend services and front-end views
        </li>
        <li>
          Implemented performance and reliability improvements across the stack,
          including API optimization, request throttling, memoization, and
          reduced client-side re-renders
        </li>
        <li>
          Automated builds, tests, and deployments using GitHub Actions, and
          followed Git best practices such as feature branching, pull requests,
          and code reviews
        </li>
        <li>
          Comfortable working in Linux environments and containerizing
          applications with Docker and Docker Compose for consistent development
          and deployment workflows
        </li>
        <li>
          Experienced in containerizing applications using Docker and Docker
          Compose, writing Dockerfiles and Compose definitions for development
          and deployment workflows
        </li>
        <li>
          Participated in Agile/Scrum ceremonies and contributed throughout the
          full software development lifecycle
        </li>
        <li>
          Collaborated closely with designers, frontend and backend engineers,
          QA, and product owners to ensure cohesive feature delivery
        </li>
      </ul>
    </>
  );
}
