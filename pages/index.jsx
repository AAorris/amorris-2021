// Links
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import MediaService from "../services/media"
import { Poster } from "../components/video"
import ReactHLS from 'react-hls-player'

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

function Home(props) {
    const { blurhash, blurUpThumb, width, height, video } = props.allFaceposts[0].media
    return <main>
        <Head>
            <title>Links | Aaron Morris </title>
        </Head>
        
        <Block>
            {/* <pre>{JSON.stringify(props)}</pre> */}
            <ReactHLS
                width={width}
                height={height}
                url={video.streamingUrl}
                poster={blurUpThumb}
                videoProps={{muted: true, autoPlay: true, loop: true}}
            />
            {/* <img style={{width, height}} src={blurUpThumb} />s */}
            {/* <Poster
                hash={blurhash}
                width={width}
                height={height}
            /> */}
        </Block>
    </main>
}

export const getServerSideProps = async () => {
    const service = new MediaService()
    const props = await service.getLatest()
    return { props }
}

export default Home;