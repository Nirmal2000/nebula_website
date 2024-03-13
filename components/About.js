// components/BenefitsSection.js
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why become an AI Teacher?</h2>
      <div className={styles.benefits}>
        <div className={styles.benefitItem}>
          <div className={styles.icon}> {/* Icon placeholder */}</div>
          <h3>Be a Part of the AI Revolution</h3>
          <p>AI is completely reshaping the world. Unleash your creativity and domain knowledge to play a critical role in contributing to this new and exciting future.</p>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.icon}> {/* Icon placeholder */}</div>
          <h3>Join a Community of Fellow AI Teachers</h3>
          <p>Outlier convenes experts across various industries to generate data and provide feedback on the most advanced generative AI models. Join our community to work alongside like-minded experts in your domain.</p>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.icon}> {/* Icon placeholder */}</div>
          <h3>Work On Your Own Schedule</h3>
          <p>Leverage your expertise and skills to earn competitive pay, while enjoying the flexibility to choose when and where you work.</p>
        </div>
      </div>
    </div>
  );
}
