import Head from "next/head";
import Link from "next/link";
import NoteService from "services/notes";

function Notes({ notes }) {
  return (
    <main>
      <Head>
        <title>Notes | Aaron Morris </title>
      </Head>
      <div className="notes-outer">
        {notes.map((note) => (
          <div key={note.path} className="note-outer">
            <div className="note-inner">
              <Link
                key={note.path}
                href="/notes/[slug]"
                as={`/notes/${note.path}`}
              >
                <a className="plain">
                  {note.poster && <img className="poster" src={note.poster} />}
                  <h3 style={{ marginBlockEnd: 0 }}> {note.title} </h3>
                </a>
              </Link>
              <sub>
                Written {new Date(note.created_at).toLocaleDateString()}
              </sub>
              <br />
              <sub style={{ marginBlockStart: 0 }}>{note.headline}</sub>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .note {
          color: #eee;
          padding: 1.5rem;
        }
        .note img {
          max-width: 100%;
        }
        .note a {
          color: #eee;
          font-weight: bold;
        }
        .note p {
          line-height: 1.5em;
        }
        .poster {
          width: 400px;
          margin: auto;
          border-radius: 10px;
          display: block;
          border: 1px solid rgba(128, 128, 128, 0.2);
        }
        .note-outer {
          background: #313131;
          color: #bdbdbd;
          border: 1px solid rgba(128, 128, 128, 0.2);
          border-radius: 1.5rem;
          padding: 1.5rem;
          margin: 1rem auto;
          box-sizing: content-box;
          flex: 0 1 400px;
          margin: 1rem;
        }
        .notes-outer {
          font-size: 18pt;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100vw;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  const notes = await new NoteService().getLatestNotes();
  const props = { notes };
  return { props };
}

export default Notes;
