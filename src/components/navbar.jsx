
import Styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <a href="#home" className={Styles.logo}>
        Portfolio<span>.</span>
      </a>

      <div className={Styles.links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
