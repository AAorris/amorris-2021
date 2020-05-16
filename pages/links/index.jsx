// Links
import Head from "next/head";
import { Fragment } from "react";

function Tags({ children }) {
    if (!children || !children.length) return null
    return <sub className={"block-when-small float-right"}>
        {children.map(tag => <span key={tag} className="tag">{tag}</span>)} 🏷️
    </sub>
}

function Brand(props) {
    return <div className="brand" {...props} />
}

function Links({ items }) {
    return <main>
        <Head>
            <title>Links | Aaron Morris </title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <div style={{padding: 80, textAlign: 'center'}}>
            <h1>All my Links</h1>
            <sub className={"block header"}>Click tags to see similar links.</sub>
        </div>
        {/* <img src="/img/p10.008.jpg" style={{width: 400}} />  */}
        <ul style={{listStyle: 'none', padding: '0 2em'}}>
            {items.map(post => (
                <li key={post.uid}>
                    <div className="item-container">
                    <span>🔗 <a href={post.arg}>
                        <b> {post.title} </b>
                        <sub className={"block-when-small"}>{post.subtitle}</sub>
                    </a></span>
                        <Tags>{post.tags || []}</Tags>
                    </div>
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
                    arg: value.get('url'),
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