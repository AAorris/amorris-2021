import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import MediaService from "../services/media";
// import ReactHLS from 'react-hls-player'
import useSWR from "swr";

const Block = props => (
  <section
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {props.children}
  </section>
);

const fetcher = async key => {
  const resp = await fetch(key);
  return await resp.json();
};

const ChatForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="message"
        type="text"
        placeholder="Send a message"
        value={message}
        onInput={e => setMessage(e.target.value)}
      />
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
        input,
        button {
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
  );
};
const Chat = () => {
  const { data, mutate, revalidate } = useSWR("/api/chat", fetcher, {
    refreshInterval: 10000
  });
  const sendMessage = message => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: message
    }).then(r =>
      fetch("/api/chat", { headers: { "Cache-Control": "no-cache" } })
    );
    mutate([...data, message], false);
  };
  if (!data) {
    return <div></div>;
  }
  return (
    <div className="outer">
      <div className="messages">
        {data
          .filter(item => typeof item === "string")
          .map(item => (
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
          backdrop-filter: saturate(180%) blur(8px);
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
        @media (max-width: 600px) {
          .outer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

function Home(props) {
  const post = props.allFaceposts[0];
  return (
    <main>
      <Head>
        <title>Links | Aaron Morris </title>
      </Head>
      <Block>
        <div
          style={{
            margin: 0,
            transform:
              "scale(3) rotateZ(-10deg) translateX(-20px) translateY(5px)"
          }}
        >
          👇
        </div>
        <Link href={"/stories/[id]"} as={`/stories/${post.id}`}>
          <a>
            <div
              style={{
                border: "4px solid rgb(218, 0, 111)",
                backgroundPosition: "50% 40%",
                boxShadow: "3px 10px 30px rgba(20, 10, 0, 0.3)",
                width: 200,
                height: 200,
                marginBottom: 10,
                borderRadius: 150,
                backgroundImage: `url(${post.media.video.thumbnailUrl})`,
                backgroundSize: "cover"
              }}
            ></div>
          </a>
        </Link>
        <div className="headline">
          <h1>Aaron Morris</h1>
          <p>
            👨‍💻<a href="https://www.youtube.com/zapier">@Zapier</a>&nbsp; 🏡{" "}
            <a href="/img/p10.008.jpg">Tiny house</a>&nbsp; 📜{" "}
            <Link href="/notes">
              <a>Notes</a>
            </Link>
            &nbsp; 🔗{" "}
            <Link href="/links">
              <a>Hyperlinks</a>
            </Link>
            &nbsp; 🏳️‍🌈 He/His
          </p>
        </div>
        {/* <Chat /> */}
      </Block>
      <style jsx>{`
        .headline {
          text-align: center;
          background: yellow;
          padding: 1rem;
        }
        .headline h1 {
          margin-block-start: 0;
          letter-spacing: -0.05em;
        }
        .headline a {
          color: black;
        }
        @media (min-width: 600px) {
          .headline {
            z-index: -1;
            transform: rotateZ(-5deg) translateY(-50px);
            font-size: 18pt;
          }
          .headline h1 {
            font-size: 100pt;
          }
        }
      `}</style>
    </main>
  );
}

export const getServerSideProps = async () => {
  const service = new MediaService();
  const props = await service.getLatest();
  return { props };
};

export default Home;
