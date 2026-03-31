import { lazy } from "react";
import type { FC } from "react";
import "./App.css";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contacts = lazy(() => import("./pages/Contacts"));

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
    </>
  );
};

export default App;