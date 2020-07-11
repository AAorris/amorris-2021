import Link from "next/link";

export default function Tags({ children }) {
  if (!children || !children.length) return null;
  return (
    <span>
      &nbsp;&nbsp;
      {children.map((tag, idx) => (
        <Link key={tag} href="/links/tagged/[tag]" as={`/links/tagged/${tag}`}>
          <a>
            <span>{` #${tag}${idx === children.length ? "" : " "}`}</span>
          </a>
        </Link>
      ))}
      <style jsx>{`
        span {
          display: inline-block;
          padding: 4px;
          text-align: center;
        }
      `}</style>
    </span>
  );
}
