// components/RequirementsSection.js
import styles from '../styles/Requirements.module.css';
import Link from 'next/link';

export default function Requirements() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Requirements</h2>
      <p className={styles.description}>Here is what you need to become an AI Teacher:</p>
      <ul className={styles.requirementsList}>
        <li className={styles.requirementItem}><span className={styles.checkIcon}>✓</span> Verify your phone number</li>
        <li className={styles.requirementItem}><span className={styles.checkIcon}>✓</span> Do a background check</li>
        <li className={styles.requirementItem}><span className={styles.checkIcon}>✓</span> Pass domain-specific proficiency exams</li>
      </ul>
      <Link href="https://www.linkedin.com/company/nebula-ai-train" passHref>
        <span className={styles.getStartedButton}>Get Started</span>
      </Link>
    </div>
  );
}
