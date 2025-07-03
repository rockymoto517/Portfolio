import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  ),
});
