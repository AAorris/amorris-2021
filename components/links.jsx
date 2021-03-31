import Tags from "./tags";

export default function Links({ items }) {
  return (
    <div className="links container text-gray-200 mx-auto">
      {items.map((post) => (
        <div className="link-outer pt-1" key={post.uid}>
          <div className="link-inner">
            <span>
              <a href={post.arg}>{post.title}</a>
              <Tags>{post.tags || []}</Tags>
              <br />
              <sub className="text-gray-500 block">{post.subtitle}</sub>
              <br />
              <hr />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
