import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><p className="footer-brand">Guildrun Guide</p><p>Unofficial fan-made guide. Not affiliated with Leyline or Guildrun.</p></div>
        <div className="footer-links"><Link href="/">Home</Link><a href={siteConfig.officialGameUrl} rel="noreferrer">Official game page</a></div>
      </div>
    </footer>
  );
}
