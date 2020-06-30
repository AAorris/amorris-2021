import Head from "next/head"
import Links from '../../../components/links'


function LinksPage({ title, subtitle, items }) {
	return (
		<main>
			<Head>
				<title>Tagged {title} links | amorris.ca</title>
			</Head>
			<section className="title intro">
				<h1 style={{ color: "black", textTransform: "capitalize" }}>
					Links Tagged {title}
				</h1>
				<sub className={"block header"}>{subtitle || ""}</sub>
			</section>
			<Links items={items} />
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

export default LinksPage;
