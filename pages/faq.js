import styles from '../styles/Faq.module.css';

export default function FAQ() {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <p className={styles.faqIntro}>
        We are excited about your interest in Nebula AI! We haveve assembled a list of frequently asked questions
        below to give you more information on what it is like to be a contributor.
      </p>
      <div className={styles.faqContent}>
        <h2 className={styles.faqHeading}>About Nebula AI</h2>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>What is Nebula AI?</h3>
          <p className={styles.faqAnswer}>
            Nebula AI is a platform that connects subject matter experts to help build the world’s
            most advanced Generative AI. You will work on a variety of projects from generating
            training data in your discipline to advance these models to evaluating performance of
            models.
          </p>
        </div>
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>Is it safe to provide my information?</h3>
          <p className={styles.faqAnswer}>
            Yes, we require contributors to provide their identification to ensure a safe platform
            and prevent bad actors. We maintain privacy standards in storing information and do
            not share your information with any third parties.
          </p>
        </div>
        {/* More FAQ items can be added here */}
      </div>
    </div>
  );
}
