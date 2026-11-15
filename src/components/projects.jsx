import Styles from "../pages/home.module.css";
import ProjectCards from "./projectcards";

export default function Projects() {
  return (<>


      <section id="projects" className={Styles.projectpannel}>
        <div className={Styles.projectWrapper}>

          <div className={Styles.projectHeading}>
            <div>
              <span className={Styles.projectLabel}>
                SELECTED WORK / 2025 — 2026
              </span>

              <h2>
                Things I've
                <br />
                <span>built.</span>
              </h2>
            </div>

            <p className={Styles.projectIntro}>
              Ideas, experiments and projects brought to life
              through curiosity, creativity and code.
            </p>
          </div>

          <div className={Styles.projectTopline}>
            <span>01 — 03 / PROJECTS</span>
            <span>SCROLL TO EXPLORE ↘</span>
          </div>


        <div className={Styles.projects}>

            <ProjectCards
                number="01"
                name="Bookhub"
                theme="E-Commerce / EdTech"
                description="A digital reading platform built to bring books, readers and educational resources together."
                link="https://bookhub-blond.vercel.app/"
            />

            <ProjectCards
                number="02"
                name="RedWine"
                theme="Technology / Web Development"
                description="A technology-driven project focused on building meaningful digital experiences."
                link="https://github.com/nagarshreyash07-lab/redwine"
            />

            <ProjectCards
                number="03"
                name="Coming Soon"
                theme="Experiments / Innovation"
                description="New ideas, experiments and projects are currently taking shape."
                link="#"
                buttonText="Coming Soon"
            />

        </div>


          <div className={Styles.projectFooter}>
            <span>BUILT WITH CURIOSITY.</span>
            <span>MORE TO COME.</span>
          </div>

        </div>
      </section>


  </>);
}
