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

function Links({ tag, items }) {
	return (
		<main>
			<Head>
				<title>Tagged {tag.name} links | amorris.ca</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
					rel="stylesheet"
				></link>
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
					Links Tagged {tag.name}
				</h1>
				<sub className={"block header"}>{tag.subtitle || ""}</sub>
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

export async function getStaticPaths() {
	const base = require("airtable").base("appaKRf92yu31M3Nf");
	const paths = [];
	await base("Tags")
		.select({})
		.eachPage((records, next) => {
			records.forEach((value) => {
				paths.push({
					params: {
						tag: value.get("name"),
						subtitle: value.get("subtitle") || "",
					},
				});
			});
			next();
		});
	// console.log(paths)
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const base = require("airtable").base("appaKRf92yu31M3Nf");
	const tagLookup = {};
	const items = [];
	let tagData; // we'll collect this below

	// common for all pages that show other tags for a link
	// collect tags into a mapping
	await base("Tags")
		.select({})
		.eachPage((records, next) => {
			records.forEach((value) => {
				tagLookup[value.id] = value.get("name");
				if (value.get("name") === params.tag) {
					tagData = value;
				}
			});
			next();
		});
	// console.log(`Tag id was ${tagId}`)
	return await base("Links")
		.select({ view: "Web" })
		.eachPage((records, next) => {
			records.forEach(async (value) => {
				if (
					(value.get("tags") || []).some((tag) => {
						// console.log(tag);
						return tag === tagData.id;
					})
				) {
					items.push({
						uid: value.get("uri") || "",
						arg: value.get("url") || "",
						quicklookurl: value.get("url") || "",
						subtitle: value.get("subtitle") || "",
						title: value.get("uri") || "",
						tags: (value.get("tags") || []).map((id) => tagLookup[id]),
					});
				}
			});
			next();
		})
		.then(() => ({
			props: {
				tag: {
					name: tagData.get("name"),
					subtitle: tagData.get("subtitle") || "",
				},
				items,
			},
		}));
}

export default Links;
