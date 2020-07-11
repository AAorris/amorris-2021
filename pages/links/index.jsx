import { useState, useEffect } from "react";
import Head from "next/head";
import Links from "../../components/links";
import LinkService from "../../services/links";

function LinksPage({ links }) {
  const [latestLinks, setLatestLinks] = useState([]);
  useEffect(() => {
    if (!links) return;
    const uris = links.map(({ uri }) => uri);
    const controller = new AbortController();
    const { signal } = controller;
    fetch("/api/links", { signal })
      .then((resp) => resp.json())
      .then((fresh) => {
        setLatestLinks(fresh.links.filter(({ uri }) => !uris.includes(uri)));
      });
    return () => controller.abort();
  }, []);
  return (
    <main>
      <Head>
        <title>Links | Aaron Morris</title>
      </Head>
      <Links items={latestLinks} />
      <Links items={links} />
      <style jsx>{`
        main {
          padding: 3rem;
        }
      `}</style>
    </main>
  );
}

export async function getStaticProps() {
  const links = await new LinkService().getAllLinks();
  const props = { links };
  return { props };
}

export default LinksPage;
