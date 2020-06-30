import Head from "next/head"
import Links from '../../components/links'

function LinksPage({ links }) {
    return <main>
        <Head>
            <title>Links | Aaron Morris</title>
        </Head>
        <section class="title intro">
            <h1>My saved links</h1>
            <sub className={"block header"}>I save and tag links. Is that weird?</sub>
        </section>
        <Links items={links} />
    </main>
}

export async function getServerSideProps(context) {
    const host = context.req.headers.host
    const protocol = host.includes('localhost') ? 'http' : 'https'
    const resp = await fetch(`${protocol}://${host}/api/links`);
    const props = await resp.json()
    return { props }
  }

export default LinksPage