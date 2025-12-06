import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="w-5/6 max-h-5/6 space-x-8 my-8 m-auto flex justify-between">
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
