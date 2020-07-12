import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import MediaService from "../../services/media";
import ReactHLS from "react-hls-player";
import useSWR from "swr";

const Block = (props) => (
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
      justifyContent: "center",
    }}
  >
    {props.children}
  </section>
);

const fetcher = async (key) => {
  const resp = await fetch(key);
  return await resp.json();
};

const ChatForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
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
        onInput={(e) => setMessage(e.target.value)}
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

function Story(props) {
  const {
    width,
    height,
    video: { mp4Url, thumbnailUrl },
  } = props.facepost.media;
  const seoTags = props.facepost._seoMetaTags.map((x) => x.attributes);
  return (
    <main>
      <Head>
        <title>Story | Aaron Morris </title>
        {seoTags.map(({ property, content }) => (
          <meta key={property} property={property} content={content} />
        ))}
      </Head>
      <Block>
        <video
          controls
          width={width}
          height={height}
          poster={thumbnailUrl}
          src={mp4Url}
        ></video>
      </Block>
      <style jsx>{`
        video {
          margin-bottom: 70px;
        }
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

export const getServerSideProps = async ({ params }) => {
  const service = new MediaService();
  const props = await service.getById(params.id);
  return { props };
};

export default Home;
