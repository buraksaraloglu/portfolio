import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import works from '../../fixtures/works.json';
import whatwas from '../../fixtures/whatwas.md';
import tictactoe from '../../fixtures/tictactoe.md';
import firebase from 'firebase/app';

export const Project = () => {
  const [mdText, setMdText] = useState('');
  const [device, setDevice] = useState('');

  const { slug } = useParams();

  useEffect(() => {
    const defaultAnalytics = firebase.analytics();
    defaultAnalytics.logEvent('page_view', { page_title: slug });

    if (slug !== undefined) {
      fetch(
        slug === 'whatwas' ? whatwas : slug === 'tictactoe' ? tictactoe : ''
      )
        .then((response) => response.text())
        .then((text) => {
          setMdText(text);
        });
    }
  }, [slug]);

  useEffect(() => {
    const width = window.innerWidth;
    width > 1100 ? setDevice('desktop') : setDevice('phone');
  }, []);

  const project = works.filter((work) => work.slug === slug);

  return project.map((demoWork) => (
    <>
      <Helmet>
        <title>{demoWork.title} - Burak Saraloglu</title>
        <meta name="description" content={demoWork.desc} />
      </Helmet>
      <section className="work project-page" key={demoWork.id}>
        <article className="work__inner">
          <aside className="work__inner__top">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={demoWork.demo}
              tabIndex="0"
            >
              <img
                src={
                  device === 'desktop'
                    ? demoWork.imgLink
                    : demoWork.mobileImgLink
                }
                alt={demoWork.alt}
                width={device === 'desktop' ? '800' : '300'}
                height={device === 'desktop' ? '400' : '600'}
                loading="lazy"
                className="demo-image"
              />
            </a>
          </aside>
          <aside className="work__inner__bottom">
            <div className="description-container">
              <div className="title-container">
                <h1 className="demo-title">{demoWork.title} </h1>
                <div className="source-links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={demoWork.demo}
                    tabIndex="0"
                    className="outline-button demo-link"
                  >
                    Live Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={demoWork.github}
                    tabIndex="0"
                    className="outline-button demo-link"
                  >
                    Github
                  </a>
                </div>
              </div>
              <article className="project__details">
                <ReactMarkdown source={mdText} />
              </article>
            </div>
          </aside>
        </article>
      </section>
    </>
  ));
};
