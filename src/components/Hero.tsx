import Image from "next/image";
import Link from "next/link";
import { homeImage } from "@/data/images";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Source-aware guides for the Steam demo</p>
          <h1>Guildrun Wiki <span>&amp; Guides</span></h1>
          <p className="hero-lede">Practical answers built around a simple promise: confirmed facts stay separate from community reports, editorial advice, and details that are still uncertain.</p>
          <div className="hero-actions"><a className="button button-primary" href="#method">How we verify guides</a><Link className="button button-secondary" href="/">Browse published guides</Link></div>
          <p className="disclaimer">Unofficial fan-made guide. Not affiliated with Leyline or Guildrun.</p>
        </div>
        <div className="hero-panel" aria-label="Editorial status overview">
          <p className="panel-kicker">V1.1 publishing gate</p><h2>Useful before visible.</h2>
          <div className="status-row"><span className="status-dot ready" /><div><strong>Ready</strong><small>Complete, sourced, indexable</small></div></div>
          <div className="status-row"><span className="status-dot review" /><div><strong>Review</strong><small>Substantive, sourced, noindex</small></div></div>
          <div className="status-row"><span className="status-dot draft" /><div><strong>Draft</strong><small>Not routed or publicly linked</small></div></div>
        </div>
        <figure className="hero-visual"><Image src={homeImage.src} alt={homeImage.alt} width={homeImage.width} height={homeImage.height} sizes="(max-width: 1212px) calc(100vw - 2rem), 1180px" priority style={{ objectPosition: homeImage.objectPosition }} /><figcaption>{homeImage.credit}</figcaption></figure>
      </div>
    </section>
  );
}
