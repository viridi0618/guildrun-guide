import Link from "next/link";
export default function NotFound() { return <div className="shell not-found"><p className="eyebrow">404</p><h1>This guide is not published.</h1><p>Drafts stay off the public site until they contain substantive, source-backed information.</p><Link className="button button-primary" href="/">Return home</Link></div>; }
