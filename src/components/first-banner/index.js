import React from 'react';
import { Helmet } from 'react-helmet';

export const FirstBanner = () => {
  return (
    <>
      <Helmet>
        <title>Burak Saraloglu - Front-end Developer</title>
        <meta
          name="description"
          content="Hello, I'm Burak. A front-end developer, music producer and videographer."
        />
      </Helmet>
      <section className="first-banner">
        <article className="introduction">
          <h1 className="introduction__header">
            Hello, I'm Burak.
            <br />
            <span>A Front-end Developer</span>
          </h1>
          <h2 className="introduction__lower-text">
            I also do music productions and videos.
          </h2>
        </article>
      </section>
      <div className="scroll-indicator">
        <div className="dots"></div>
      </div>
    </>
  );
};
