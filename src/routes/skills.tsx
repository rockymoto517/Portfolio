import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

function Skills() {
  return (
    <main className="w-3/5 mx-auto mb-auto p-2">
      <div className="flex justify-between">
        <div className="flex-col">
          <h2 className="text-xl font-semibold">Languages</h2>
          <ul className="list-disc mt-2">
            <li>JavaScript/TypeScript</li>
            <li>SQL (and variants)</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>Lua</li>
            <li>Shell Scripting</li>
          </ul>
        </div>
        <div className="flex-col">
          <h2 className="text-xl font-semibold">Tools</h2>
          <ul className="list-disc mt-2">
            <li>React</li>
            <li>TailwindCSS</li>
            <li>NextJS</li>
            <li>git/GitHub</li>
            <li>CMake/xmake</li>
            <li>pip/pipx</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
      <Separator className="my-3" />
      <div>
        <h1 className="text-2xl font-semibold">Education</h1>
        <div className="flex justify-between">
          <h2 className="text-lg">B.S. Mathematics and Computer Science</h2>
          <h2 className="text-lg">Graduated 2024</h2>
        </div>
        <h3 className="mb-3">DePaul University</h3>
        <p>
          Relevant Coursework: Web Development, APIs, Optimizations,
          Multi-threading, Software Testing
        </p>
      </div>
    </main>
  );
}
