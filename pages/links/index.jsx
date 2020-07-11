import { useState, useEffect } from "react";
import Head from "next/head";
import Links from "../../components/links";
import LinkService from "../../services/links";

function LinksPage({ links }) {
  const [latestLinks, setLatestLinks] = useState([]);
  useEffect(async () => {
    if (!links) return () => {};
    const uris = links.map(({ uri }) => uri);
    const resp = await fetch("/api/links");
    const { links } = await resp.json();
    setLatestLinks(links.filter(({ uri }) => !uris.includes(uri)));
    return () => {};
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
