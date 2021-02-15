import React, { useState, useEffect } from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import works from "../fixtures/works.json"

const Work = () => {
  const [device, setDevice] = useState("")
  useEffect(() => {
    const width = window.innerWidth
    width > 800 ? setDevice("desktop") : setDevice("phone")
  }, [])

  return works.map(demoWork => (
    <section className="work" key={demoWork.id}>
      <article className="work__inner">
        <aside className="work__inner__top">
          <OutboundLink href={`/work/${demoWork.slug}`} tabIndex="0">
            <img
              srcSet={
                device === "desktop"
                  ? demoWork.homeImg + " 790w"
                  : demoWork.mobileImgLink + " 274w"
              }
              sizes="(max-width: 600px) 274w,
            790px"
              src={
                device === "desktop" ? demoWork.homeImg : demoWork.mobileImgLink
              }
              alt={demoWork.alt}
              width={device === "desktop" ? "790" : "274"}
              height={device === "desktop" ? "564" : "511"}
              loading="lazy"
              className="demo-image"
            />
          </OutboundLink>
        </aside>
        <aside className="work__inner__bottom">
          <div className="description-container">
            <div className="title-container">
              <h3 className="demo-title">{demoWork.title} </h3>
              <div className="source-links">
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={demoWork.demo}
                  tabIndex="0"
                  className="outline-button demo-link"
                >
                  Live Demo
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={demoWork.github}
                  tabIndex="0"
                  className="outline-button demo-link"
                >
                  Github
                </OutboundLink>
              </div>
            </div>
            <p className="demo-description">{demoWork.desc}</p>
            <div className="demo-links">
              <a
                href={`/work/${demoWork.slug}`}
                tabIndex="0"
                className="view-more"
              >
                View more →
              </a>
            </div>
          </div>
        </aside>
      </article>
    </section>
  ))
}

export default Work
