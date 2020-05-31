import '../styles.css'
import { Fragment } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
      <script dangerouslySetInnerHTML={{__html:`
        /* segment */
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION="4.1.0";
        analytics.load("NQOoVY7vqMs4QmycJouRzoiDKuuuTO0h");
        analytics.page();
        }}();
      `}} />
    </Head>
    <header>
    <a href="/"><div className="brand">Aaron Morris</div></a>
        <div className="social" style={{display: 'flex'}}>
            <a title="Updates on Twitter" href="https://twitter.com/aaorris">🐦</a>
            <a title="Code on Github" href="https://github.com/aaorris">🐙</a>
            <a title="Part of a Web Ring" href="https://webring.xxiivv.com ">💫</a>
        </div>
    </header>
    <Component {...pageProps} />
    </Fragment>
}

export default MyApp