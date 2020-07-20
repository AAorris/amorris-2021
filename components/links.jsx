import Tags from "./tags";

export default function Links({ items }) {
  return (
    <div className="links container">
      {items.map((post) => (
        <div className="link-outer" key={post.uid}>
          <div className="link-inner">
            <span>
              <a href={post.arg}>{post.title} ↗︎</a>
              <Tags>{post.tags || []}</Tags>
              <br />
              {post.subtitle}
            </span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .links {
          font-size: 16pt;
          margin: auto;
          width: max-content;
          max-width: 62ch;
        }
        .link-outer {
        }
        .link-inner {
          padding: 1rem;
          border-bottom: 1px solid #333;
        }
      `}</style>
    </div>
  );
}
