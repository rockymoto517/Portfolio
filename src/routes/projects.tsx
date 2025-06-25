import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-fit align-middle justify-center p-2">
      <p className="text-center text-xl pb-2">
        Put my projects here (add mark for projects still maintained)
      </p>
      <p className="text-center text-xl">Python Notebook</p>
      <p className="text-center text-xl">EclipseBuilder</p>
      <p className="text-center text-xl">YEA Screencap</p>
      <p className="text-center text-xl">TwitchBot</p>
    </div>
  );
}
