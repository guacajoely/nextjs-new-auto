import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={`/newpage`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Next.js Logo"
            width={200}
            height={200}
            priority
          />
        </div>
      </Link>
    </main>
  );
}
