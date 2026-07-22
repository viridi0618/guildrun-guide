import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Guildrun Guide home">
          <span className="brand-mark" aria-hidden="true">GR</span>
          <span>Guildrun Guide</span>
        </Link>
        <nav aria-label="Primary navigation"><Link href="/">Home</Link></nav>
      </div>
    </header>
  );
}
