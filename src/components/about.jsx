import Styles from "../pages/home.module.css";

export default function About() {
  return (<>


      <section id="about" className={Styles.about}>
        <div className={Styles.aboutWrapper}>

          <div className={Styles.aboutHeading}>
            <span className={Styles.aboutLabel}>
              A LITTLE ABOUT ME
            </span>

            <h2>
              Beyond the code,
              <br />
              <span>there's a thinker.</span>
            </h2>
          </div>

          <div className={Styles.aboutContent}>

            <div className={Styles.aboutIntro}>
              <p className={Styles.aboutNumber}>
                01 / INTRODUCTION
              </p>

              <p className={Styles.aboutDescription}>
                I'm Shreyash Nagar — a curious mind interested in
                technology, entrepreneurship, and the possibilities
                of building something meaningful.
              </p>

              <p className={Styles.aboutDescription}>
                I enjoy exploring ideas, understanding how things
                work, and turning what I learn into things that exist
                beyond imagination. For me, growth is a continuous
                process of questioning, experimenting, and creating.
              </p>
            </div>

            <div className={Styles.aboutQuote}>
              <span className={Styles.quoteMark}>“</span>

              <h3>
                Exploring.
                <br />
                Learning.
                <br />
                Building.
                <br />
                Growing.
              </h3>

              <span className={Styles.quoteCaption}>
                A mindset, not just a tagline.
              </span>
            </div>

          </div>

          <div className={Styles.aboutFooter}>
            <span>CURIOUS BY NATURE.</span>
            <span>DRIVEN BY POSSIBILITY.</span>
          </div>

        </div>
      </section>


  </>);
}
