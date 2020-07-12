import Head from "next/head";
import Link from "next/link";

function Home(props) {
  return (
    <main>
      <Head>
        <title>Aaron Morris</title>
      </Head>
      <div className="headline">
        <img src="/images/icons/icon-384x384.png" />
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
        </p>
      </div>
      <style jsx>{`
        main {
          display: grid;
          place-items: center;
        }
        img {
          border-radius: 384px;
          margin-bottom: -100px;
        }
        .headline {
          text-align: center;
        }
        .headline h1 {
          font-size: 72pt;
          color: #444;
          mix-blend-mode: color-burn;
          margin-block-start: 0;
          letter-spacing: -0.05em;
        }
      `}</style>
    </main>
  );
}

export default Home;
