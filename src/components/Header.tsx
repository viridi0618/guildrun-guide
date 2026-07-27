import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "Heroes", href: "/heroes" },
  { label: "Builds", href: "/builds" },
  { label: "Release", href: "/release-date" },
];

export default function Header() {
  return <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="Guildrun Guide home"><span className="brand-mark" aria-hidden="true">GR</span><span>Guildrun Guide</span></Link>
    <nav aria-label="Primary navigation">{navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
  </div></header>;
}
