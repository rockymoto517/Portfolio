import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full p-2">
        <ModeToggle />
        <h1 className="text-xl font-semibold">My Portfolio :D</h1>
        <p>Hi!</p>
      </div>
      <Separator />
    </>
  );
}
