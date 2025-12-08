import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="w-5/6 sm:max-h-5/6 my-8 m-auto grid sm:grid-cols-3 grid-cols-1 gap-12 justify-between">
      {projects.map((project) => (
        <Card className="w-full overflow-auto" key={project.id}>
          <CardHeader>
            <CardTitle className="space-y-2">
              <p>
                {project.position} &mdash; {project.location}
              </p>
              <p>
                {project.company} ({project.date})
              </p>
              <p>Project: {project.title}</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
            <br />
            <ul className="list-disc m-4">
              {project.responsibilities.map((responsibility, idx) => (
                <li key={`${project.id}-${idx}`}>{responsibility}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
