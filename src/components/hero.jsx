import Styles from "../pages/home.module.css";

export default function Hero() {
  return (<>

      <section id="home" className={Styles.intro}>

        {/* LEFT CONTENT */}
        <div className={Styles.box1}>
          <h1 className={Styles.hi}>Hi, I am</h1>

          <h2 className={Styles.name}>
            Shreyash Nagar
          </h2>

          <h1 className={Styles.quality}>
            Entrepreneur<span>.</span>
          </h1>

          {/* SOCIAL LINKS */}
          <div className={Styles.buttons}>

            <a
              className={Styles.button}
              href="https://github.com/nagarshreyash07-lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={Styles.icons} src="/github.png" alt="GitHub" />
            </a>

            <a
              className={Styles.button}
              href="https://www.linkedin.com/in/shreyash-nagar-582893409/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={Styles.icons} src="/linkedin.png" alt="LinkedIn" />
            </a>

            <a
              className={Styles.button}
              href="https://wa.me/8349419628"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={Styles.icons} src="/whatsapp.png" alt="WhatsApp" />
            </a>

            <a
              className={Styles.button}
              href="https://discord.com/users/1568138540473253921"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={Styles.icons} src="/discord.png" alt="Discord" />
            </a>

          </div>

          {/* ACTION BUTTONS */}
          <div className={Styles.options}>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nagarshreyash21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.hireme}
            >
              Hire Me
            </a>

            <a
              href="/files/shreyashresume.pdf"
              download
              className={Styles.download}
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={Styles.box2}>
          <div className={Styles.imageFrame}>
            <img src="/sitelogo.png" alt="Shreyash Nagar" />
          </div>
        </div>

      </section>


  </>);
}
