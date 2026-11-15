import Styles from "../pages/home.module.css";

export default function Contact() {
  return (<>


      <section id="contact" className={Styles.contact}>

        <div className={Styles.contactContainer}>

          <div className={Styles.contactInfo}>
            <p className={Styles.contactTag}>GET IN TOUCH</p>
            <h2>Let's talk<span>.</span></h2>
            <p>
              Have an idea, a project, or just want to connect?
              Feel free to drop me a message.
            </p>
          </div>

          <form
            className={Styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const data = new FormData(form);

              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");

              const subject = encodeURIComponent(`Portfolio message from ${name}`);
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
              );

              window.location.href =
                `mailto:nagarshreyash21@gmail.com?subject=${subject}&body=${body}`;
            }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              required
            />

            <button type="submit">
              Send Message ↗
            </button>

          </form>

        </div>

      </section>

  </>);
}
