import Tags from "./tags";

export default function Links({ items }) {
  return (
    <ul className="links container">
      {items.map((post) => (
        <li key={post.uid}>
          <div>
            <span>
              <a href={post.arg}>{post.title} ↗︎</a>
              <Tags>{post.tags || []}</Tags>
              <br />
              {post.subtitle}
            </span>
          </div>
        </li>
      ))}
      <style jsx>{`
        ul {
          font-size: 16pt;
          margin: auto;
          width: max-content;
        }
        li {
          margin: 1rem;
        }
      `}</style>
    </ul>
  );
}
