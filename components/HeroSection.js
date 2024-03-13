import styles from '../styles/HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.title}>Shape the Next Generation of AI with your Expertise</h1>
      <p className={styles.description}>
        Make foundational contributions to cutting-edge AI products and research on your own schedule.
      </p>
      <Link href="https://www.linkedin.com/company/nebula-ai-train" passHref>
        <button className={styles.button}>Get Started</button>
      </Link>
    </div>
  );
}
