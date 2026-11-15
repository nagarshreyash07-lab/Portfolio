
import Styles from "./projectcards.module.css";

export default function ProjectCards({
    name = "Bookhub",
    theme = "E-Commerce",
    description = "A platform for exchanging books, notes and other e-resources.",
    link = "https://bookhub-blond.vercel.app/",
    buttonText = "Explore Project",
    number = "01",
}) {
    return (
        <article className={Styles.card}>

            <div className={Styles.thumbnail}>
                <span className={Styles.projectNumber}>
                    {number}
                </span>

                <span className={Styles.previewText}>
                    {name}
                </span>

                <span className={Styles.previewArrow}>↗</span>
            </div>

            <div className={Styles.content}>

                <div className={Styles.meta}>
                    <p className={Styles.theme}>{theme}</p>
                    <span className={Styles.status}>PROJECT</span>
                </div>

                <h3 className={Styles.title}>{name}</h3>

                <p className={Styles.description}>
                    {description}
                </p>

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.openproject}
                >
                    {buttonText}
                    <span>↗</span>
                </a>

            </div>
        </article>
    );
}
