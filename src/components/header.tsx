import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "./ui/separator";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="mb-4 sticky top-0 bg-background">
      <div className="flex justify-between items-center w-full p-2">
        <div className="w-1/3 font-semibold space-x-2 py-3 text-foreground">
          <Link
            to="/"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            Summary
          </Link>
          <Link
            to="/skills"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in"
          >
            Experience
          </Link>
        </div>
        <ModeToggle />
      </div>
      <Separator />
    </header>
  );
}
