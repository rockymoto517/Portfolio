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
          Five years of experience developing responsive, user-centered web
          applications using React, Redux, TypeScript, JavaScript, HTML5, CSS3,
          and Node.js
        </li>
        <li>
          Skilled in building dynamic, component-driven interfaces with React,
          leveraging hooks and reusable component patterns to create scalable,
          maintainable, and performant applications
        </li>
        <li>
          Proficient in managing complex application state with Redux and Redux
          Toolkit, including creating slices, thunks, and selectors to
          streamline data flow and improve reliability
        </li>
        <li>
          Experienced in building SEO-friendly, high-performance applications
          using server-side rendering and data fetching strategies with Next.js
        </li>
        <li>
          Experienced in styling responsive and accessible UI components using
          Tailwind CSS to support consistent design systems and rapid
          development
        </li>
        <li>
          Proficient in building multi-page application flows with React Router,
          including protected routes, nested routing structures, and
          parameterized paths to deliver intuitive navigation experiences
        </li>
        <li>
          Strong understanding of modern JavaScript features, such as
          async/await, promises, destructuring, arrow functions, and closures,
          to write clean, modular, and efficient client- side logic
        </li>
        <li>
          Skilled in testing and validating REST APIs with Postman and cURL,
          including configuring environments and writing automated scripts to
          ensure dependable backend integration
        </li>
        <li>
          Experienced in using GitHub Actions and workflow automation, and
          experienced with Git best practices such as branching strategies, pull
          requests, and structured code reviews
        </li>
        <li>
          Proficient in working in Linux environments, using command-line tools
          for file management, environment configuration, permissions, and
          troubleshooting
        </li>
        <li>
          Experienced in containerizing applications using Docker and Docker
          Compose, writing Dockerfiles and Compose definitions for development
          and deployment workflows
        </li>
        <li>
          Participated in Agile/Scrum ceremonies, including sprint planning,
          daily standups, demos, and retrospectives, and contributed throughout
          the full software development lifecycle
        </li>
        <li>
          Collaborated closely with designers, backend engineers, QA teams, and
          product owners, communicating proactively to ensure alignment and
          smooth delivery across cross- functional teams
        </li>
      </ul>
    </>
  );
}
