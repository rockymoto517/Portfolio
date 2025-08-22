import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
