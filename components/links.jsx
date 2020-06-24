import Tags from './tags'

export default function Links({ items }) {
	return (
		<ul style={{ listStyle: "none", padding: "0 2em" }}>
			{items.map((post) => (
				<li key={post.uid}>
					<div className="item-container">
						<span className="leaves-space-for-tags">
							🔗{" "}
							<a className="plain" href={post.arg}>
								<b style={{ textTransform: "capitalize" }}> {post.title} </b>
								<sub className={"block-when-small"}>{post.subtitle}</sub>
							</a>
						</span>
						<Tags>{post.tags || []}</Tags>
					</div>
				</li>
			))}
		</ul>
	);
}
