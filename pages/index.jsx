// Links
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
            <sub className={"block header"}>Welcome to my web site.</sub>
        </div>
        <Block>
            <h2>👀 Why am I here?</h2>
            <p>I'm building an online space for pursuing health and knowledge.</p>
            <p>I'm actively organizing and sharing information to get there.</p>
            <p>I'm also sharing my story along with tips on doing it yourself.</p>
        </Block>
        <Block>
            <h2>💃 What do I want?</h2>
            <p>I want to...</p>
            <ul>
                <li>Appreciate nature 🌱 and technology 👩‍💻</li>
                <li>Optimize and balance my brain 🧠</li>
                <li>Maximize my potential and impact ✨</li>
                <li>Know myself and be known 🧘‍♂️</li>
                <li>Create a healthy family 👨‍👩‍👧</li>
            </ul>
            <p>I want to connect if you're on a similar path and share what I learn.</p>
        </Block>
        <Block>
            <h2>✨ Follow me for updates!</h2>
            <ul>
                <li>I'll share what I learn.</li>
                <li>I'll connect you with others in this space.</li>
                <li>I'll respect your attention by sharing in moderation.</li>
            </ul>
            <Form label="home-cta-1" />
        </Block>
        <Block>
            <h2>🏡 My tiny house</h2>
            <img style={{display: 'block', margin: 'auto', padding: 20}} src="/img/p10.008.jpg" /> 
            <p>This is Mucha. My fiancé Lily and I live here.</p>
            <p>I work remotely for a tech company called Zapier.</p>
            <p>Lily is a holistic nutritionist and online entrepreneur. She helps burning women in creative industries beat burnout and become resilient.</p>
        </Block>
        <Block>
            <h2>🤵 Me</h2>
            <img style={{display: 'block', margin: 'auto', padding: 20}} src="/img/p10.010.jpg" /> 
            <p>This is me! I'm 26 years old and I'm spending every day learning, growing, and taking action.
            I've run a marathon. I work remotely. I have a beautiful garden. I have a healthy body. I'm happily engaged to the love of my life.
            I love woodworking and windsurfing and sailing. In the picture above, I was about to jump out of an airplane.</p>
            <p>Most people choose to tackle single-minded goals.
                My single-minded goal is brain-care. One key to optimum brain health is balanced brain growth.</p>
            <p>The best part, I believe, is that taking care of your brain makes you happier. More productive. More effective.
                It's the best investment you can make in yourself. Get connected as I dive deep into my theories, and current science.
            </p>
        </Block>
        <Block>
            <h2>👇 Forget social media.</h2>
            <p>There's too much noise on social media. Let's share directly with each other.</p>
            <Form label="home-cta-1" />
        </Block>
        <Block>
            <h2>🤔 Looking for my archives?</h2>
            <p>I share links all the time on social media but it's too easy to lose track of posts and bookmarks.
                My web site is the home for everything I find interesting or save for later.
                Want to browse around? If you find something interesting.
            </p>
            <h3>Tagged Links</h3>
            <ul>{['tech', 'home', 'web', 'life', 'science', 'graphics', 'math', 'design'].map(tag => (
                <li key={tag} style={{marginLeft: 32}}>
                    <Link href={"/links/tagged/[tag]"} as={`/links/tagged/${tag}`}>
                        <a className="underline">{tag}</a>
                    </Link>
                </li>
            ))}</ul>
            <p>Feel free to explore. Sign up for email updates where I'll
                share deep dives and insights.</p>
        </Block>
        <script dangerouslySetInnerHTML={{__html: `
            function handleSubmission() {
                const params = new URLSearchParams(location.search);
                if (params.get('source')) {
                    const name = params.get('name')
                    const email = params.get('email')
                    const website = params.get('website')
                    const source = params.get('source')
                    const about = params.get('about')
                    
                    fetch('https://hooks.zapier.com/hooks/catch/6815891/orex9oe', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({name, email, website, source, about})
                    }).then(() => location.replace('/'))
                }
            }
            handleSubmission()
        `}}></script>
    </main>
}

export default Links;