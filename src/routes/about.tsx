import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="w-full h-fit align-middle justify-center p-2">
      <p className="text-center text-xl">Blurb</p>
    </div>
  );
}
