import Head from "next/head";
import { useRouter } from "next/router";
import NoteService from "services/notes";

function Note({ note }) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <main>
        <h1>Loading this note...</h1>
      </main>
    );
  const { body, headline, title, poster } = note;
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={headline} />
        <meta name="og:description" content={headline} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        {poster ? <meta name="og:image" content={poster} /> : null}
      </Head>
      <div className="note" dangerouslySetInnerHTML={{ __html: body }} />
      <style jsx>{`
        div {
          font-size: 18px;
          max-width: 62ch;
          margin: auto;
        }
      `}</style>
      <style jsx global>{`
        h1 {
          text-transform: capitalize;
        }
        h1,
        h2,
        h3,
        h4 {
          color: #fafafa;
        }
        div,
        p,
        ul,
        li,
        ol {
          line-height: 1.5em;
          color: #bbb;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const note = await new NoteService().getNote(params.slug);
  const props = { note };
  return { props };
}

export async function getStaticPaths() {
  const paths = (await new NoteService().getLatestNotes()).map(({ path }) => ({
    params: { slug: path },
  }));
  return {
    paths,
    fallback: true,
  };
}

export default Note;
