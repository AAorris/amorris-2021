import { useState } from "react";
import Head from "next/head";
import MediaService from "services/media";

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

export default Story;
