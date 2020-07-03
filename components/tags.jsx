import Link from 'next/link'

export default function Tags({ children }) {
	if (!children || !children.length) return null;
	return (
		<span>&nbsp;&nbsp;
			{children.map((tag, idx) => (
				<Link key={tag} href="/links/tagged/[tag]" as={`/links/tagged/${tag}`}><a>
					<span className="tag">{` #${tag}${idx === children.length ? '' : ' '}`}</span>
				</a>
        </Link>
			))}
			<style jsx>{`
				 .tag {
					display: inline-block;
					padding: 4px;
					text-align: center;
					color: #41fcc4;
				}
			`}</style>
		</span>
	);
}