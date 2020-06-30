import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function Notes({ notes }) {
    return <main>
        <Head>
            <title>Notes | Aaron Morris </title>
        </Head>
        <div className="note-items">
            {notes.map(note => (
                <div className="note-container">
                    <Link key={note.path} href="/notes/[slug]" as={`/notes/${note.path}`}><a className="plain">
                    <div className="item-container">
                        {note.poster && <img className="poster" src={note.poster} />}
                        <div>
                                <h3 style={{marginBlockEnd: 0}}> {note.title} </h3>
                                <sub>Written {new Date(note.created_at).toLocaleDateString()}</sub><br/>
                                <sub style={{marginBlockStart: 0}}>{note.headline}</sub>
                        </div> 
                    </div>
                    </a></Link>
                </div>
            ))} 
        </div>
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