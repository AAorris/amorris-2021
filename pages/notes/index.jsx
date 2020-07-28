import Head from "next/head";
import Link from "next/link";
import NoteRepository from "repositories/notes";

function Notes({ notes }) {
  return (
    <main>
      <Head>
        <title>Notes | Aaron Morris </title>
      </Head>
      <div className="notes-outer md:mx-auto m-6 md:w-1/2">
        {notes.map((note) => (
          <div
            key={note.path}
            className="note-outer py-6 border-b-2 border-gray-900"
          >
            <div className="note-inner">
              <Link
                key={note.path}
                href="/notes/[slug]"
                as={`/notes/${note.path}`}
              >
                <a className="plain capitalize">
                  <h3 className="text-white pb-3 text-2xl"> {note.title} </h3>
                  {note.poster && <img className="poster" src={note.poster} />}
                </a>
              </Link>
              <sub className="text-gray-600">
                Written {new Date(note.created_at).toLocaleDateString()}
              </sub>
              <br />
              <sub className="text-gray-400">{note.headline} </sub>
              <Link
                key={note.path}
                href="/notes/[slug]"
                as={`/notes/${note.path}`}
              >
                <a className="text-gray-400">
                  <sub>{`[read more]`}</sub>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const notes = await new NoteRepository().getLatestNotes();
  const props = { notes };
  return { props, unstable_revalidate: 1 };
}

export default Notes;
