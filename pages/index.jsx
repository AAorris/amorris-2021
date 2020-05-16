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
            <h1>👋 Hey There!</h1>
            <sub className={"block header"}>I'm Aaron Morris. Welcome!</sub>
        </div>
        <Block>
            <h2>My Goals</h2>
            <p>I want to follow you and hear about what you think is interesting.</p>
            <p>
                <a href="https://twitter.com/intent/tweet?screen_name=aaorris&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-show-count="false">Tweet to @aaorris</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </p>
            <p>I want to organize information to learn more about myself.</p>
            <p>I want to achieve optimum general performance as a developer and partner.</p>
            <p>I want to start a family and be a great dad.</p>
        </Block>
        <Block>
            <h2>Say Hello</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto', alignItems: 'center', gridGap: '2rem'}}>
                <h3>Twitter</h3>
                <a href="https://twitter.com/aaorris?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @aaorris</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <p>Twitter is where I post frequent tagged links.</p>
            </div>
            <h2>See My Link Collection</h2>
            <div>{(([js, web, tech, home, life, science, graphics, math, design, enterprise, news]) => (
                <Fragment>
                    <p>I share information on social media and collect it here.</p>
                    <p>Are you a front end developer? Try checking out my {js} {web} {tech} links.</p>
                    <p>Are you a designer? I share resources like {design} and {graphics}.</p>
                    <p>Are you thoughtful about life and learning? Try {home} {life} {science} and {math}.</p>
                    <p>Are you business focused? Check out my {enterprise} {news} links.</p>
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
            <p>This is Mucha. My fiancé Lily and I live here.</p>
            <p>I work remotely for a tech company called Zapier.</p>
            <p>Lily is a holistic nutritionist and online entrepreneur. She helps burning women in creative industries beat burnout and become resilient.</p>
        </Block>
        <Block>
            <h2>About Me</h2>
            <img style={{display: 'block', margin: 'auto', padding: 20}} src="/img/p10.010.jpg" /> 
            <p>This is me! I'm 26 years old and I'm spending every day learning, growing, and taking action.</p>
            <p>Most people choose to tackle single-minded goals.
                My single-minded goal is brain-care. My top brain care tip is to grow your left and right brain together.</p>
            <p>My goal is to become an authority on how you can accelerate your brain's performance,
                so you can learn and recall faster, remember important moments and information, and solve problems better
                than you ever thought possible using meta-learning techniques and augmentation with technology.
            </p>
            <p>I hope you'll follow me as I journey towards my goals. For now, you can come here to see all the
                links I think are interesting. I save them so I can look back on them, and I hope you'll enjoy
                what I'm building.
            </p>
        </Block>
    </main>
}

export default Links;