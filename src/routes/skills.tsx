import { Separator } from "@/components/ui/separator";

export default function Skills() {
  return (
    <main className="w-3/5 mx-auto mb-auto p-2">
      <div className="flex-col space-y-2">
        <h2 className="text-xl font-semibold">Languages</h2>
        <p className="mb-6">
          JavaScript, TypeScript, HTML5, CSS3, Python, SQL, C, C++, Bash, Shell
          Scripting
        </p>

        <h2 className="text-xl font-semibold">Frameworks</h2>
        <p className="mb-6">
          Tailwind CSS, Material UI, ShadCN UI, React, React Redux, Redux
          Toolkit, React Router, Tanstack Router, Axios, Vite
        </p>

        <h2 className="text-xl font-semibold">Databases</h2>
        <p className="mb-6">PostgreSQL, MongoDB, SQLite</p>

        <h2 className="text-xl font-semibold">Data Serialization</h2>
        <p className="mb-6">JSON, XML, YAML, TOML, CSV, Binary Formats</p>

        <h2 className="text-xl font-semibold">Tools</h2>
        <p className="mb-6">
          Git, Mocha, npm, Perforce, GitHub (actions), Gitlab, Docker, Postman,
          cURL, Jira, GNU Coreutils, UV, CMake, Make
        </p>
      </div>
      <Separator className="my-3" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Education</h1>
        <h2 className="text-lg">B.S. Mathematics and Computer Science</h2>
        <h3 className="mb-3">DePaul University</h3>
      </div>
    </main>
  );
}
