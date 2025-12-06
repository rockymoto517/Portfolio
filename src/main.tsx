import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootPage from "./routes/__root.tsx";
import Index from "./routes/index.tsx";
import Skills from "./routes/skills.tsx";
import Projects from "./routes/projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootPage />}>
            <Route index element={<Index />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
