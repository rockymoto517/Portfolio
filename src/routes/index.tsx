// import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  /*
  return (
    <div className="w-full mb-auto justify-center p-2">
      <Card className="w-1/4 h-72 justify-center">
        <Card className="m-auto w-11/12 h-full border-4 text-center">me!</Card>
      </Card>
    </div>
  );
		*/
  return <></>;
}
