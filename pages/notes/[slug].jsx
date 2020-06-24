import { Fragment } from "react";
import Head from "next/head";
// import Link from "next/link";

function Notes({ note: { body, headline, title} }) {
    return <main>
        <Head>
            <title>{title}</title>
            <meta name="description" value={headline} />
        </Head>
        <div className="note" dangerouslySetInnerHTML={{__html: body }} />
        <style jsx>{`
          div {
            max-width: 72ch;
            margin: auto;
          }
        `}</style>
    </main>
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const resp = await fetch(`${protocol}://${host}/api/notes/${context.query.slug}`);
  const props = await resp.json()
  return { props }
}


export default Notes;