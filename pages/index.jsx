// Links
import Head from "next/head";
import { Fragment } from "react";

function Tags({ children }) {
    if (!children || !children.length) return null
    return <sub className={"block"}>
        🏷️ {children.map(tag => <span key={tag}  style={{padding: 4}}>{tag}</span>)}
    </sub>
}

function Links({ items }) {
    return <main style={{padding: "2em"}}>
        <Head>
            <title>Links | Aaron Morris </title>
        </Head>
        <h1>🏠 Aaron's Links</h1>
        <sub className={"block"}>My brain at a glance</sub>
        <img src="/img/p10.008.jpg" style={{width: 400}} />
        <ul style={{listStyle: 'none', padding: 0}}>
            {items.map(post => (
                <li key={post.uid}>
                    🔗 <a href={post.url}>
                        <b> {post.title} </b>
                        <sub className={"block-when-small"}>{post.subtitle}</sub>
                    </a>
                    <Tags>{post.tags}</Tags>
                </li>
            ))} 
        </ul>
    </main>
}

export async function getStaticProps() {
    const base = require('airtable').base('appaKRf92yu31M3Nf');
    const tagLookup = {}
    const items = [];
    // collect tags into a mapping
    await base('Tags').select({})
        .eachPage((records, next) => {
            records.forEach(value => tagLookup[value.id] = value.get('name'))
            next()
        })
    return await base('Links').select({view: 'Web'})
        .eachPage((records, next) => {
            const x = records.forEach(async (value) => {
                items.push({
                    uid: value.get('uri'),
                    url: value.get('url'),
                    quicklookurl: value.get('url'),
                    subtitle: value.get('subtitle'),
                    title: value.get('uri'),
                    tags: (value.get('tags')||[]).map(id => tagLookup[id]),
                });
            })
            next()
        }).then(x => ({ props: { items }}))
}

export default Links