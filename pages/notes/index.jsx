import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function Notes({ notes }) {
    return <main>
        <Head>
            <title>Notes | Aaron Morris </title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <ul style={{listStyle: 'none', padding: '0 2em'}}>
            {notes.map(note => (
                <li key={note.path}>
                    <div className="item-container">
                    <span>📜 <Link href="/notes/[slug]" as={`/notes/${note.path}`}><a>
                        <b> {note.title} </b>
                        <sub className="block-when-small">Written {new Date(note.created_at).toLocaleDateString()}</sub>
                        <sub style={{display: 'block'}}>{note.headline}</sub>
                    </a></Link></span>
                    </div>
                </li>
            ))} 
        </ul>
    </main>
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const resp = await fetch(`${protocol}://${host}/api/notes`);
  const props = await resp.json()
  return { props }
}


export default Notes;