// Links
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function Tags({ children }) {
    if (!children || !children.length) return null
    return <sub className={"block-when-small float-right"}>
        {children.map(tag => <span key={tag} className="tag">{tag}</span>)} 🏷️
    </sub>  
}

function Brand(props) {
    return <div className="brand" {...props} />
}

function handleSubmission() {
    const params = new URLSearchParams(location.search);
    if (params.get('source')) {
        const name = params.get('name')
        const email = params.get('email')
        const website = params.get('website')
        const source = params.get('source')
        const about = params.get('about')
        
        fetch('https://hooks.zapier.com/hooks/catch/6815891/orex9oe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, website, source, about})
        })
        location.replace('/')
    }
}

const Form = props => (
    <form method="get" data-url="https://hooks.zapier.com/hooks/catch/6815891/orex9oe/">
        <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder="How should I address you?" />
        </div><div>
            <label htmlFor="email">Your Email</label>    
            <input type="text" name="email" placeholder="How can I email you?" />
        </div><div>
            <label htmlFor="website">Your Website (or social media)</label>
            <input type="text" name="website" placeholder="Optional: How can I follow you?" />
        </div>
        <div>
            <textarea name="about" placeholder="Optional: Tell me about you! Fun facts? Interests?"></textarea>
        </div>
        <div>
            <input hidden={true} name="source" value={props.label} readOnly></input>
            <input type="submit"></input>
        </div>
    </form>
)

const Block = props => <div style={{margin: 'auto', width: 768}}>{props.children}</div>

function Links({ items }) {
    return <main>
        <Head>
            <title>Links | Aaron Morris </title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <div style={{padding: 80, textAlign: 'center'}}>
            <h1>👋 Hey! I'm Aaron</h1>
            <sub className={"block header"}>I try to share thoughtful
                <Link href="/links"><a style={{fontSize: '32pt'}}> Links </a></Link>
                and <Link href="/notes"><a style={{fontSize: '32pt'}}>Notes</a></Link>.
            </sub>
        </div>
        <Block>
            <h2>My Link Tree</h2>

            <div>{(([js, web, tech, home, life, science, graphics, math, design, enterprise, news]) => (
                <Fragment>
                    <p>I collect and organize information for purposes including memory and self discovery (How are my information sources biased?)</p>
                    <p>You might find you relate to some of the tags I'm biased towards right now.</p>
                    <p>Are you a front end developer? Try checking out my {js} {web} {tech} links.</p>
                    <p>Are you a designer? I share resources like {design} and {graphics}.</p>
                    <p>Are you thoughtful about life and learning? Try {home} {life} {science} and {math}.</p>
                    <p>Are you business focused? Check out my {enterprise} {news} links.</p>
                    <p>Or just see everything at <Link href="/links"><a className="underline">Links</a></Link></p>
                </Fragment>
            ))(['js', 'web', 'tech', 'home', 'life', 'science', 'graphics', 'math', 'design', 'enterprise', 'news'].map(tag => (
               <Link href={"/links/tagged/[tag]"} as={`/links/tagged/${tag}`}>
                    <a className="underline">{tag}</a>
                </Link>
            )))}</div>
        </Block>
        <Block>
            <h2>My Tiny House</h2>
            <img style={{display: 'block', margin: 'auto', padding: 20}} src="/img/p10.008.jpg" /> 
            <p>This is Mucha. My fiancé Lily and I live here and work remotely.</p>
            <p>Lily is a holistic nutritionist and online entrepreneur. She helps burning women in creative industries beat burnout and become resilient.</p>
        </Block>
        <Block>
            <h2>About Me</h2>
            <img style={{display: 'block', margin: 'auto', padding: 20}} src="/img/p10.010.jpg" /> 
            <p>I'm a full-stack engineer at Zapier. We're working to democratize automation.</p>
            <p>My personal goal is practicing meta-learning. That means learning about learning itself, and how to do that better.</p>
            <p>Follow me on <a className="underline" title="Updates on Twitter" href="https://twitter.com/aaorris">Twitter</a>.</p>
        </Block>
    </main>
}

export default Links;