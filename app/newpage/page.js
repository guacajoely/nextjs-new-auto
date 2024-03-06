import Link from 'next/link';
import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.main}>
      <h1>{`NEW PAGE`}</h1>
      <Link href={`/`}>
        <h1 className={styles.center}>Back to home</h1>
      </Link>
    </div>
  )
}