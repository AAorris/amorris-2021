import Head from "next/head";
import Link from "next/link";

function Home(props) {
  return (
    <main>
      <Head>
        <title>Aaron Morris</title>
      </Head>
      <div className="headline pb-8">
        <img src="/img/p10.011.jpg" width="250" height="250" />
        <h1
          className="font-hairline leading-none"
          style={{ textShadow: "#e2e2e2 10px 30px 0px" }}
        >
          Aaron Morris
        </h1>
        <p>Full-Stack engineer at Zapier</p>
        <sub>
          Follow me on <a href="https://twitter.com/aaorris">Twitter</a> for
          updates on tech, education, and community
        </sub>
      </div>
      <style jsx>{`
        main {
          display: grid;
          place-items: center;
          color: #eee;
        }
        img {
          border-radius: 384px;
          margin: auto;
          margin-bottom: -1.75em;
          border: 1px solid #222;
        }
        .headline {
          text-align: center;
        }
        .headline h1 {
          font-size: 72pt;
          color: #e3fff7;
          mix-blend-mode: color-dodge;
          margin-block-start: 0;
          letter-spacing: -0.05em;
          margin-bottom: 2rem;
        }
      `}</style>
    </main>
  );
}

export default Home;
