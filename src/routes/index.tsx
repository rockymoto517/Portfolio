import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full h-fit align-middle justify-center p-2">
      <p className="text-center text-xl">Contact Information:</p>
      <p className="text-center text-xl">Skills:</p>
      <p className="text-center text-xl">Picture</p>
      <p className="text-center text-xl">Socials</p>
    </div>
  );
}
