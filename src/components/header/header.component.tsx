import Image from "next/image";
import Link from "next/link";
import styles from "./header.component.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        lil-shimon.dev
      </Link>
      <div className={styles.icons}>
        <a
          href="https://x.com/lil_shimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/x.svg" alt="X" width={20} height={20} />
        </a>
        <a
          href="https://github.com/lil-shimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
        </a>
      </div>
    </header>
  );
};
