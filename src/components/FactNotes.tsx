import type { ReactNode } from "react";
function Note({ label, className, children }: { label: string; className: string; children: ReactNode }) { return <aside className={`fact-note ${className}`}><strong>{label}</strong><div>{children}</div></aside>; }
export function ConfirmedFact({ children }: { children: ReactNode }) { return <Note label="Confirmed fact" className="confirmed">{children}</Note>; }
export function CommunityReport({ children }: { children: ReactNode }) { return <Note label="Community report" className="community">{children}</Note>; }
export function EditorialRecommendation({ children }: { children: ReactNode }) { return <Note label="Editorial recommendation" className="editorial">{children}</Note>; }
export function VersionSensitiveNote({ children }: { children: ReactNode }) { return <Note label="Version-sensitive" className="version">{children}</Note>; }
export function UncertaintyNote({ children }: { children: ReactNode }) { return <Note label="Unconfirmed detail" className="uncertain">{children}</Note>; }
