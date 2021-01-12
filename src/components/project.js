import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import { ProjectHeader } from "./header"
import works from "../fixtures/works.json"

import "./app.scss"

const Project = ({ data }) => {
  const [device, setDevice] = useState("")
  const [slug, setSlug] = useState("")

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    if (frontmatter.path !== undefined) {
      const currentSlug = frontmatter.path.slice(6, frontmatter.path.length)
      setSlug(currentSlug)
    }
  }, [frontmatter.path])

  useEffect(() => {
    const width = window.innerWidth
    width > 1100 ? setDevice("desktop") : setDevice("phone")
  }, [])

  const project = works.filter(work => work.slug === slug)

  return (
    <>
      <ProjectHeader />
      {project &&
        project.map(demoWork => (
          <section key={demoWork.id}>
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
                        device === "desktop"
                          ? demoWork.imgLink
                          : demoWork.mobileImgLink
                      }
                      alt={demoWork.alt}
                      width={device === "desktop" ? "800" : "300"}
                      height={device === "desktop" ? "400" : "600"}
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
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </article>
                  </div>
                </aside>
              </article>
            </section>
          </section>
        ))}
    </>
  )

  // return (
  //   <>
  //     <ProjectHeader />
  //     <section id="project">
  //       <Helmet>
  //         <title>{project[0].title}</title>
  //         {/* <meta name="description" content={demoWork.desc} /> */}
  //       </Helmet>
  //       <section className="work project-page">
  //         <article className="work__inner">
  //           <aside className="work__inner__top">
  //             <a
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               href={project[0].demo}
  //               tabIndex="0"
  //             >
  //               <img
  //                 src={
  //                   device === "desktop"
  //                     ? "demoWork.imgLink"
  //                     : "demoWork.mobileImgLink"
  //                 }
  //                 alt={"demoWork.alt"}
  //                 width={device === "desktop" ? "800" : "300"}
  //                 height={device === "desktop" ? "400" : "600"}
  //                 loading="lazy"
  //                 className="demo-image"
  //               />
  //             </a>
  //           </aside>
  //           <aside className="work__inner__bottom">
  //             <div className="description-container">
  //               <div className="title-container">
  //                 <h1 className="demo-title">{frontmatter.title} </h1>
  //                 <div className="source-links">
  //                   <a
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     href={project[0].demo}
  //                     tabIndex="0"
  //                     className="outline-button demo-link"
  //                   >
  //                     Live Demo
  //                   </a>
  //                   <a
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     href={project[0].github}
  //                     tabIndex="0"
  //                     className="outline-button demo-link"
  //                   >
  //                     Github
  //                   </a>
  //                 </div>
  //               </div>
  //               <article className="project__details">
  //                 <div dangerouslySetInnerHTML={{ __html: html }} />
  //               </article>
  //             </div>
  //           </aside>
  //         </article>
  //       </section>
  //     </section>
  //   </>
  // )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`

export default Project
