export default function QuickFacts() {
  const facts = [
    ["Focus", "Guides & mechanics"], ["Game context", "Steam demo"], ["Evidence", "Exact source URLs"], ["Database", "Not part of this site"],
  ];
  return <dl className="quick-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
