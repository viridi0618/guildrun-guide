import Link from "next/link";
export default function Breadcrumbs({ current, showGuides }: { current: string; showGuides?: boolean }) {
  if (showGuides) {
    return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span></nav>;
  }
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{current}</span></nav>;
}
