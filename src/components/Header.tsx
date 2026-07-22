import Link from "next/link";
import { readyGuides } from "@/data/content";

export default function Header() {
  return <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Guildrun Guide home"><span className="brand-mark" aria-hidden="true">GR</span><span>Guildrun Guide</span></Link>
    <nav aria-label="Primary navigation"><Link href="/">Home</Link>{readyGuides.slice(0, 3).map((guide) => <Link key={guide.slug} href={`/${guide.slug}`}>{guide.h1.replace(/^Guildrun\s+/, "")}</Link>)}</nav>
  </div></header>;
}
