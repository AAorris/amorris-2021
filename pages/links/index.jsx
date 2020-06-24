import Head from "next/head";
import LinkService from "../../services/links";

function Tags({ children }) {
    if (!children || !children.length) return null
    return <sub className={"block-when-small float-right"}>
        {children.map(tag => <span key={tag} className="tag">{tag}</span>)} 🏷️
    </sub>
}

function Links({ links }) {
    return <main>
        <Head>
            <title>Links | Aaron Morris</title>
        </Head>
        <div style={{padding: 80, textAlign: 'center'}}>
            <h1>My saved links</h1>
            <sub className={"block header"}>I save and tag links. Is that weird?</sub>
        </div>
        {/* <img src="/img/p10.008.jpg" style={{width: 400}} />  */}
        <ul style={{listStyle: 'none', padding: '0 2em'}}>
            {links.map(post => (
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

export async function getServerSideProps(context) {
    const host = context.req.headers.host
    const protocol = host.includes('localhost') ? 'http' : 'https'
    const resp = await fetch(`${protocol}://${host}/api/links`);
    const props = await resp.json()
    return { props }
  }

export default Links