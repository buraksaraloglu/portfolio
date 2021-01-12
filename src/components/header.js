import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"

const Header = () => {
  const handleResumeClick = e => {
    // const defaultAnalytics = firebase.analytics()
    // defaultAnalytics.logEvent("file_download", { content_id: "portfolio" })
  }

  const headerRef = useRef(null)
  const hide = "header-hide"
  const show = "header-show"

  useEffect(() => {
    headerRef.current.classList.add(hide)
    const workContainer = document.getElementById("works")
    const worksContainerOffset = workContainer.offsetTop - window.pageYOffset

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset

      if (currentScroll >= worksContainerOffset) {
        // Down
        headerRef.current.classList.remove(hide)
        headerRef.current.classList.add(show)
        return
      } else {
        // Up
        headerRef.current.classList.remove(show)
        headerRef.current.classList.add(hide)
      }
    })
  }, [])

  return (
    <header ref={headerRef}>
      <nav>
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
      </nav>
      <div className="social-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/buraksaraloglu"
          className="social-links"
          aria-label="Github"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/buraksaraloglu/"
          className="social-links"
          aria-label="Linkedin"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:buraksaraloglu1@gmail.com"
          className="social-links"
          aria-label="Mail"
        >
          <AiOutlineMail />
        </a>
      </div>
    </header>
  )
}

export const ProjectHeader = () => {
  const handleResumeClick = e => {}

  return (
    <header className="projectHeader">
      <nav>
        <Link to="/">
          <span className="homeButton">
            <BiArrowBack />
            Home
          </span>
        </Link>
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
      </nav>
      <div className="social-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/buraksaraloglu"
          className="social-links"
          aria-label="Github"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/buraksaraloglu/"
          className="social-links"
          aria-label="Linkedin"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:buraksaraloglu1@gmail.com"
          className="social-links"
          aria-label="Mail"
        >
          <AiOutlineMail />
        </a>
      </div>
    </header>
  )
}

export default Header
