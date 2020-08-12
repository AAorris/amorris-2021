import Link from "next/link";

export default function Tags({ children }) {
  if (!children || !children.length) return null;
  return (
    <span>
      &nbsp;&nbsp;
      {children.map((tag, idx) => (
        <Link key={tag} href="/links/tagged/[tag]" as={`/links/tagged/${tag}`}>
          <a>
            <span className="p-1 text-center inline-block text-gray-600">{` #${tag}${
              idx === children.length ? "" : " "
            }`}</span>
          </a>
        </Link>
      ))}
    </span>
  );
}
