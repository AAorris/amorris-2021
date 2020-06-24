import Link from 'next/link'

export default function Tags({ children }) {
	if (!children || !children.length) return null;
	return (
		<sub className={"block-when-small float-right"}>
			{children.map((tag) => (
				<Link key={tag} href="/links/tagged/[tag]" as={`/links/tagged/${tag}`}><a className="plain sub">
					<span className="tag">{tag}</span>
				</a>
        </Link>
			))}
		</sub>
	);
}