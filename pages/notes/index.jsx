import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function Notes({ notes }) {
    return <main>
        <Head>
            <title>Notes | Aaron Morris </title>
        </Head>
        <ul style={{listStyle: 'none', padding: '0 2em'}}>
            {notes.map(note => (
                <Link href="/notes/[slug]" as={`/notes/${note.path}`}><a className="plain">
                <li className="note-container" key={note.path}>
                    <div className="item-container">
                        {note.poster && <img className="poster" src={note.poster} />}
                        <span>
                                <h3 style={{marginBlockEnd: 0}}> {note.title} </h3>
                                <sub>Written {new Date(note.created_at).toLocaleDateString()}</sub><br/>
                                <sub style={{marginBlockStart: 0}}>{note.headline}</sub>
                        </span> 
                    </div>
                </li>
                </a></Link>
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