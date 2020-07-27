import Link from "next/link";
import { Fragment } from "react";
import "components/index.css";

const TwitterSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);
const GithubSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="white"
    />
  </svg>
);
const WebringSvg = () => (
  <svg
    width="24"
    height="24"
    fill="white"
    viewBox="0 0 236 212"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>xxiivv webring</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M193.479 116.847C198.558 135.805 195.899 156.003 186.086 173L179.086 185.124L154.837 171.124L161.837 159C167.937 148.434 169.59 135.878 166.433 124.094C163.275 112.31 155.566 102.263 145 96.1627C134.435 90.0628 121.879 88.4097 110.094 91.5673C98.3101 94.7249 88.2629 102.434 82.1629 113L25.1629 211.727L0.914185 197.727L57.9142 98.9999C67.7272 82.0033 83.8902 69.601 102.847 64.5214C121.805 59.4418 142.003 62.101 159 71.914C175.997 81.727 188.399 97.89 193.479 116.847Z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M102.847 207.478C83.8901 202.399 67.7271 189.996 57.9141 173L50.9141 160.875L75.1628 146.875L82.1628 159C88.2628 169.565 98.3101 177.275 110.094 180.432C121.879 183.59 134.435 181.937 145 175.837C155.565 169.737 163.275 159.69 166.433 147.906C169.59 136.121 167.937 123.565 161.837 113L104.837 14.2729L129.086 0.272949L186.086 98.9998C195.899 115.996 198.558 136.195 193.479 155.152C188.399 174.11 175.997 190.273 159 200.086C142.003 209.899 121.805 212.558 102.847 207.478Z"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M69.6741 83.674C83.5518 69.7963 102.374 61.9999 122 61.9999H136V89.9999H122C109.8 89.9999 98.0998 94.8463 89.4731 103.473C80.8464 112.1 76 123.8 76 136C76 148.2 80.8464 159.9 89.4731 168.527C98.0998 177.154 109.8 182 122 182H236V210H122C102.374 210 83.5518 202.204 69.6741 188.326C55.7964 174.448 48 155.626 48 136C48 116.374 55.7964 97.5517 69.6741 83.674Z"
    ></path>
  </svg>
);
const Icon = ({ graphic }) => {
  const Graphic = graphic;
  return (
    <div className="grid w-1/4 px-8 border-box">
      <Graphic />
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <header>
        <Link href="/">
          <a className="plain" aria-label="Home">
            <Icon graphic={() => "🏠"} />
          </a>
        </Link>
        <Link href="/notes" as="/notes">
          <a className="plain" aria-label="Notes">
            <Icon graphic={() => "📜"} />
          </a>
        </Link>
        <Link href="/links" as="/links">
          <a className="plain" aria-label="Links">
            <Icon graphic={() => "🔗"} />
          </a>
        </Link>
        <Link href="/todos" as="/todos">
          <a className="plain" aria-label="Todos">
            <Icon graphic={() => "✅"} />
          </a>
        </Link>
      </header>
      <Component {...pageProps} />
      <footer>
        <a
          className="plain"
          title="Updates on Twitter"
          href="https://twitter.com/aaorris"
        >
          <Icon graphic={TwitterSvg} />
        </a>
        <a
          className="plain"
          title="Code on Github"
          href="https://github.com/aaorris"
        >
          <Icon graphic={GithubSvg} />
        </a>
        <a
          className="plain"
          title="Part of a Web Ring"
          href="https://webring.xxiivv.com "
        >
          <Icon graphic={WebringSvg} />
        </a>
      </footer>
    </Fragment>
  );
}

export default MyApp;
