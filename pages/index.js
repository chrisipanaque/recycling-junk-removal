import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recycling Junk Removal</title>
        <meta name="description" content="located in Shoreline, Washington" />
        <link rel="icon" href="/favicon.ico" />
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

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
