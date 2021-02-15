import React from "react"
import { useFirebase } from "gatsby-plugin-firebase"

const FirstBanner = () => {
  const handleResumeClick = e => {
    useFirebase(firebase => {
      firebase
        .analytics()
        .logEvent("file_download", { content_id: "portfolio" })
    })
  }

  return (
    <>
      <section className="first-banner">
        <article className="introduction">
          <h1 className="introduction__name">Burak Saraloglu</h1>
          <h2 className="introduction__header">
            Hello, I’m Burak, a front-end developer.{" "}
            <span role="img" aria-label="hello">
              👋
            </span>
            <br />I dedicate my time to develop products and create useful
            services mostly built with React.
            <span> I also do music productions and videos.</span>
          </h2>
          <nav>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/buraksaraloglu/"
                  className="social-links"
                  aria-label="Linkedin"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/buraksaraloglu"
                  className="social-links"
                  aria-label="Github"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:buraksaraloglu1@gmail.com"
                  className="social-links"
                  aria-label="Mail"
                >
                  Mail
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/dist/Burak_Saraloglu_Resume.pdf"
                  tabIndex="0"
                  onClick={e => {
                    handleResumeClick(e)
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </article>
        <div className="scroll-indicator">
          <div className="dots"></div>
        </div>
      </section>
    </>
  )
}

export default FirstBanner
