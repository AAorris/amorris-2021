import Head from "next/head";
import { useRouter } from "next/router";
import Links from "components/links";
import LinkRepository from "repositories/links";

function LinksPage({ title, subtitle, items }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <main>
        <section>
          <h1>Loading, please wait...</h1>
        </section>
      </main>
    );
  }
  return (
    <main>
      <Head>
        <title>{title} | Aaron Morris</title>
      </Head>
      <Links items={items} />
    </main>
  );
}

export async function getStaticPaths() {
  const tags = ["tech"];
  const paths = tags.map((tag) => ({ params: { tag } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const repository = new LinkRepository();
  const { title, subtitle, items } = await repository.getLinksForTag(
    params.tag
  );
  const props = { title, subtitle, items };
  return { props, unstable_revalidate: 1 };
}

export default LinksPage;
