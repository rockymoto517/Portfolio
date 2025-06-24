import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "./ui/separator";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full p-2">
        <div className="w-1/3 font-semibold space-x-2 py-3 text-foreground">
          <Link
            to="/"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            Projects
          </Link>
        </div>
        <h1 className="w-1/3 text-center text-xl font-semibold">
          My Portfolio
        </h1>
        <ModeToggle />
      </div>
      <Separator />
    </>
  );
}
