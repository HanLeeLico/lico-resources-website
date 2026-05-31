import type { ArticleSection } from "@/lib/articles";

// Minimal inline-markdown handler: only **bold** → <strong>.
// Add more rules here later if you start authoring with italics, links, etc.
function inline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : p
  );
}

export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="article-body">
      {sections.map((s, i) => {
        switch (s.type) {
          case "lead":
            return <p key={i} className="lead">{inline(s.text)}</p>;
          case "paragraph":
            return <p key={i}>{inline(s.text)}</p>;
          case "h2":
            return <h2 key={i}>{s.text}</h2>;
          case "h3":
            return <h3 key={i}>{s.text}</h3>;
          case "checklist":
            return (
              <ul key={i} className="checklist">
                {s.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}
