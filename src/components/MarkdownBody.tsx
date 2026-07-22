import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|https?:\/\/[^\s<]+)/g;
  const output: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) output.push(text.slice(cursor, index));
    if (match[2] && match[3]) {
      const external = /^https?:/.test(match[3]);
      output.push(<a key={index} href={match[3]} rel={external ? "noreferrer" : undefined}>{match[2]}</a>);
    } else if (match[4]) output.push(<strong key={index}>{match[4]}</strong>);
    else if (match[5]) output.push(<code key={index}>{match[5]}</code>);
    else output.push(<a key={index} href={match[0]} rel="noreferrer">{match[0]}</a>);
    cursor = index + match[0].length;
  }
  if (cursor < text.length) output.push(text.slice(cursor));
  return output;
}
function isTableDivider(line: string) { return /^\|?\s*:?-{3,}/.test(line); }
function cells(line: string) { return line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()); }

export default function MarkdownBody({ body }: { body: string }) {
  const lines = body.split(/\r?\n/);
  const nodes: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    if (!lines[i].trim()) { i += 1; continue; }
    if (lines[i].startsWith("```")) {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      i += 1;
      nodes.push(<pre key={`pre-${i}`}><code>{code.join("\n")}</code></pre>);
      continue;
    }
    if (i + 1 < lines.length && lines[i].includes("|") && isTableDivider(lines[i + 1])) {
      const headers = cells(lines[i]);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) rows.push(cells(lines[i++]));
      nodes.push(<div className="table-scroll" key={`table-${i}`}><table><thead><tr>{headers.map((cell, index) => <th key={index}>{inline(cell)}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, index) => <td key={index}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }
    if (/^>\s?/.test(lines[i])) {
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ""));
      nodes.push(<blockquote key={`quote-${i}`}>{quote.map((line, index) => <p key={index}>{inline(line)}</p>)}</blockquote>);
      continue;
    }
    const listMatch = lines[i].match(/^\s*(-|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const ordered = /\d+\./.test(listMatch[1]);
      const items: string[] = [];
      while (i < lines.length) {
        const match = lines[i].match(/^\s*(-|\d+\.)\s+(.+)$/);
        if (!match || /\d+\./.test(match[1]) !== ordered) break;
        items.push(match[2]); i += 1;
      }
      const List = ordered ? "ol" : "ul";
      nodes.push(<List key={`list-${i}`}>{items.map((item, index) => <li key={index}>{inline(item)}</li>)}</List>);
      continue;
    }
    const paragraph: string[] = [lines[i++].trim()];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("```") && !/^>\s?/.test(lines[i]) && !/^\s*(-|\d+\.)\s+/.test(lines[i]) && !(i + 1 < lines.length && lines[i].includes("|") && isTableDivider(lines[i + 1]))) paragraph.push(lines[i++].trim());
    nodes.push(<p key={`p-${i}`}>{inline(paragraph.join(" "))}</p>);
  }
  return <>{nodes}</>;
}
