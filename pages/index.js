import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recycling Junk Removal</title>
        <meta name="description" content="located in Shoreline, Washington" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <a href="https://recyclingjunkremoval.com">Recycling Junk Removal</a>
        </h1>
        <h2>Mon-Sun 07:00AM - 6:00PM</h2>
        <h2>
          Call us <a href="tel:206-430-0742">(206) 430-0742</a>
        </h2>
      </header>

      <main className={styles.main}>
        <p className={styles.description}>
          We're the recycling and junk removal company that ensures your junk is
          recycled, repurposed, donated, or otherwise responsibly disposed of.
        </p>
        <p className={styles.description}>
          Your junk is carefully separated to be later remanufactured,
          repurposed or converted into new materials.
        </p>
        <p className={styles.description}>
          Our mission is to help our planet by reducing, reusing and recycling.
        </p>
      </main>

      <footer className={styles.footer}>
        <span>Call us today for a free quote</span>
        <span>
          <a href="tel:206-430-0742">(206) 430-0742</a>
        </span>
      </footer>
    </div>
  );
}
