import { useState, useEffect } from "react";
import Head from "next/head";
import Links from "components/links";
import LinkService from "services/links";

function LinksPage({ links }) {
  return (
    <main>
      <Head>
        <title>Links | Aaron Morris</title>
      </Head>
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
  return { props, unstable_revalidate: 1 };
}

export default LinksPage;
