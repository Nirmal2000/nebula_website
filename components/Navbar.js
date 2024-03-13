import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Link without the <a> tag */}
        <Link href="/">
          {/* Assuming you've saved your logo image in the public folder */}
          <Image src="/nebula_logo.jpeg" alt="Nebula AI" width={100} height={50} />
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="https://www.linkedin.com/company/nebula-ai-train" passHref>
          <span className={styles.navLink}>Careers</span>
        </Link>
        <Link href="/faq" passHref>
          <span className={styles.navLink}>FAQ</span>
        </Link>
        {/* <Link href="/login" passHref>
          <span className={styles.navLink}>Log in</span>
        </Link> */}
        <Link href="https://www.linkedin.com/company/nebula-ai-train" passHref>
          <span className={styles.navLinkActive}>Get Started</span>
        </Link>
      </div>
    </nav>
  );
}
