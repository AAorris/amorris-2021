import '../styles.css'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <header>
    <a href="/" className="plain"><div className="brand">Aaron Morris</div></a>
        <div className="social" style={{display: 'flex'}}>
            <a className="plain" title="Updates on Twitter" href="https://twitter.com/aaorris">🐦</a>
            <a className="plain" title="Code on Github" href="https://github.com/aaorris">🐙</a>
            <a className="plain" title="Part of a Web Ring" href="https://webring.xxiivv.com ">💫</a>
        </div>
    </header>
    <Component {...pageProps} />
    <footer>
      <div>
        <Link href="/notes" as="/notes">
          <a className="plain">📜 Notes</a>
        </Link>
        <Link href="/links" as="/links">
          <a className="plain">🔗 Links</a>
        </Link>
      </div>
    </footer>
    <style jsx>{`
      footer {
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 70px;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </Fragment>
}

export default MyApp