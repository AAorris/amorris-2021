// Links
import Head from "next/head";
import { Fragment } from "react";

function Tags({ children }) {
	if (!children || !children.length) return null;
	return (
		<sub className={"block-when-small float-right"}>
			{children.map((tag) => (
				<a key={tag} className="sub" href={tag}>
					<span className="tag">{tag}</span>
				</a>
			))}
		</sub>
	);
}

function Brand(props) {
	return <div className="brand" {...props} />;
}

function Links({ title, subtitle, items }) {
	return (
		<main>
			<Head>
				<title>Tagged {title} links | amorris.ca</title>
			</Head>
			<div
				style={{
					padding: 80,
					marginBottom: 30,
					background: "white",
					textAlign: "center",
				}}
			>
				<h1 style={{ color: "black", textTransform: "capitalize" }}>
					Links Tagged {title}
				</h1>
				<sub className={"block header"}>{subtitle || ""}</sub>
			</div>
			<ul style={{ listStyle: "none", padding: "0 2em" }}>
				{items.map((post) => (
					<li key={post.uid}>
						<div className="item-container">
							<span className="leaves-space-for-tags">
								🔗{" "}
								<a href={post.arg}>
									<b style={{ textTransform: "capitalize" }}> {post.title} </b>
									<sub className={"block-when-small"}>{post.subtitle}</sub>
								</a>
							</span>
							<Tags>{post.tags || []}</Tags>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const resp = await fetch(`${protocol}://${host}/api/links/tagged/${context.query.tag}`);
  const props = await resp.json()
  return { props }
}

export default Links;
