import Head from "next/head";
import Link from "next/link";

function Home(props) {
  return (
    <main>
      <Head>
        <title>Links | Aaron Morris </title>
      </Head>
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
      <style jsx>{`
        main {
          display: grid;
          place-items: center;
        }
        .headline {
          text-align: center;
        }
        .headline h1 {
          margin-block-start: 0;
          letter-spacing: -0.05em;
        }
      `}</style>
    </main>
  );
}

export default Home;
