import { useState } from "react"
import Head from "next/head"
import MediaService from "../services/media"
import ReactHLS from 'react-hls-player'
import useSWR from 'swr'

const Block = props => <section style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}>{props.children}</section>


const fetcher = async key => {
    const resp = await fetch(key)
    return await resp.json()
}

const ChatForm = ({sendMessage}) => {
    const [message, setMessage] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        sendMessage(message)
        setMessage('')
    }
    return <form className="form" onSubmit={handleSubmit}>
        <input id="message" type="text" placeholder="Send a message" value={message} onInput={e => setMessage(e.target.value)} />
        <button>Send</button>
        <style jsx>{`
            form {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            input {
                flex-grow: 1;
            }
            input, button {
                font-size: 14pt;
                background: black;
                color: white;
                outline: none;
                border: none;
                padding: 8px;
                border: 1px solid #222;
                box-sizing: border-box;
            }
        `}</style>
    </form>
}
const Chat = () => {
    const { data, mutate, revalidate } = useSWR('/api/chat', fetcher, {
        refreshInterval: 5000
    })
    const sendMessage = message => {
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: message
        }).then(r => fetch('/api/chat', {headers: {'Cache-Control': 'no-cache'}}))
        mutate([...data, message], false)
    }
    if (!data) {
        return <div></div>
    }
    return <div className="outer">
        <div className="messages">
            {data.filter(item => typeof item === 'string').map(item => (
                <div>{item}</div>
            ))}
        </div>
        <div className="form">
            <ChatForm sendMessage={sendMessage} />
        </div>
        <style jsx>{`
        .outer {
            position: fixed;
            right: 40px;
            bottom: 100px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            min-height: 300px;
            height: calc(100vh - 500px);
            width: 300px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            padding-bottom: 28pt;
            border: 4px solid yellow;
            border-radius: 8px;
        }
        .messages {
            padding: 1rem;
            overflow-y: auto;
            line-height: 1.5em;
        }
        .form {
            width: 300px;
            position: absolute;
            bottom: 0;
            flex-grow: 1;
        }
        `}</style>
        </div>
}

function Home(props) {
    const { blurUpThumb, width, height, video } = props.allFaceposts[0].media
    return <main>
        <Head>
            <title>Links | Aaron Morris </title>
        </Head>
        <Block>
            <ReactHLS
                width={width}
                height={height}
                url={video.streamingUrl}
                poster={blurUpThumb}
                videoProps={{muted: true, autoPlay: true, loop: true, alt: "Hi! I'm Aaron. Welcome to my web-site."}}
            />
            <Chat />
        </Block>
    </main>
}

export const getServerSideProps = async () => {
    const service = new MediaService()
    const props = await service.getLatest()
    return { props }
}

export default Home;