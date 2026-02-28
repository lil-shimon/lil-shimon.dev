import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: "bold",
        }}
      >
        lil-shimon.dev
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
