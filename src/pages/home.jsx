import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Styles from "./home.module.css";

export default function Home() {
  return (
    <main className={Styles.home}>
      <header className={Styles.head}><Navbar /></header>
      <div className={Styles.navSpace} />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
