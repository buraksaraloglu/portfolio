import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import firebase from 'firebase/app';

export const Header = () => {
  const handleResumeClick = (e) => {
    const defaultAnalytics = firebase.analytics();
    defaultAnalytics.logEvent('select_content', {
      content_type: 'portfolio',
      content_id: 'portfolio',
      items: [{ name: 'Portfolio' }],
    });
    console.log(defaultAnalytics);
  };
  return (
    <header>
      <nav>
        <a href="/#works" tabIndex="0">
          Works
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/dist/Burak_Saraloglu_CV.pdf"
          tabIndex="0"
          onClick={(e) => {
            handleResumeClick(e);
          }}
        >
          Resume
        </a>
        {/* <a href="/video" tabIndex="0">
          Videos
        </a>
        <a href="/music" tabIndex="0">
          Music
        </a> */}
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
  );
};

export const ProjectHeader = () => {
  const history = useHistory();
  const handleResumeClick = (e) => {
    const defaultAnalytics = firebase.analytics();
    defaultAnalytics.logEvent('select_content', {
      content_type: 'portfolio',
      content_id: 'portfolio',
      items: [{ name: 'Portfolio' }],
    });
  };

  return (
    <header className="projectHeader">
      <nav>
        <button className="homeButton" onClick={() => history.push('/')}>
          <BiArrowBack />
          Home
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/dist/Burak_Saraloglu_CV.pdf"
          tabIndex="0"
          onClick={(e) => {
            handleResumeClick(e);
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
  );
};
