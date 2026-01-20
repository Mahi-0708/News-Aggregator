export default function NewsCard({ article }) {
  const getLink = (url) => {
    // Real external article
    if (url.startsWith("http")) {
      return { href: url, label: "Read full article", disabled: false };
    }

    // Hacker News item discussion
    if (url.startsWith("/item?id=")) {
      return {
        href: `https://news.ycombinator.com${url}`,
        label: "View discussion",
        disabled: false
      };
    }

    // Domain-only links (/from?site=...)
    if (url.startsWith("/from?site=")) {
      return {
        href: null,
        label: "No external article",
        disabled: true
      };
    }

    // Fallback
    return {
      href: null,
      label: "Unavailable",
      disabled: true
    };
  };

  const link = getLink(article.url);

  return (
    <div className="card">
      <h3>{article.title}</h3>
      <p className="source">{article.source}</p>

      <div className="meta">
        <span className={`badge ${article.sentiment}`}>
          {article.sentiment}
        </span>
        <span className="category">{article.category}</span>
      </div>

      {link.disabled ? (
        <span className="disabled-link">{link.label}</span>
      ) : (
        <a href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      )}
    </div>
  );
}
