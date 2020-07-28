import Head from "next/head";
import { useRouter } from "next/router";
import NoteRepository from "repositories/notes";

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
    <main className="mt-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content={headline} />
        <meta name="og:description" content={headline} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        {poster ? <meta name="og:image" content={poster} /> : null}
      </Head>
      <div
        className="note prose mx-auto bg-white p-8 box-border rounded"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <style jsx global>{`
        .prose {
          margin-top: 200px;
          font-size: 18px;
          max-width: 62ch;
          margin: auto;
        }
        .prose h1 {
          text-transform: capitalize;
        }
        img {
          border: 1px solid #eee;
          border-radius: 4px;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const note = await new NoteRepository().getNote(params.slug);
  const props = { note };
  return { props, unstable_revalidate: 1 };
}

export async function getStaticPaths() {
  const paths = (await new NoteRepository().getLatestNotes()).map(
    ({ path }) => ({
      params: { slug: path },
    })
  );
  return {
    paths,
    fallback: true,
  };
}

export default Note;
