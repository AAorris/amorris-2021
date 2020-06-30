import Tags from './tags'

export default function Links({ items }) {
	return (
		<ul className="links container">
			{items.map((post) => (
				<li key={post.uid}>
					<div className="link item-container">
						<span>
							<a href={post.arg}>{post.title}</a>
							<Tags>{post.tags || []}</Tags>
						</span>
					</div>
				</li>
			))}
		</ul>
	);
}
