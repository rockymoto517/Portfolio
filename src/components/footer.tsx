import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-4">
      <div className="flex justify-center space-x-5">
        <a
          className="hover:text-muted-foreground duration-100"
          href="mailto:hasan.ershaid@proton.me"
        >
          hasan.ershaid@proton.me
        </a>

        <Separator orientation="vertical" />

        <a
          className="hover:text-muted-foreground duration-100"
          href="https://www.linkedin.com/in/hasan-ershaid-604202324/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
