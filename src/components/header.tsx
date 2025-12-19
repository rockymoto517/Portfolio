import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "./ui/separator";
import { NavLink } from "react-router";

type navLinkStates = {
  isActive: boolean;
  isPending: boolean;
};

export function Header() {
  function linkStyle({ isActive, isPending }: navLinkStates): string {
    let baseStyle =
      "rounded-md hover:text-accent-foreground hover:bg-accent p-2 duration-150 ease-in ";
    if (isActive)
      return baseStyle + " border-2 dark:border-emerald-700 border-emerald-400";
    if (isPending)
      return baseStyle + "border-2 dark:border-emerald-900 border-emerald-600";
    return baseStyle;
  }

  return (
    <header className="mb-4 sticky top-0 bg-background">
      <div className="flex justify-between items-center w-full p-2">
        <div className="w-1/3 font-semibold space-x-2 py-3 text-foreground">
          <NavLink to="/" className={linkStyle}>
            Summary
          </NavLink>
          <NavLink to="/skills" className={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/experience" className={linkStyle}>
            Experience
          </NavLink>
        </div>
        <ModeToggle />
      </div>
      <Separator />
    </header>
  );
}
