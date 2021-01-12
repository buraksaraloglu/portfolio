import React from "react"
import { Helmet } from "react-helmet"
import { Router } from "@reach/router"
import Layout from "../components/layout"

import IndexPage from "./index"

const App = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {"@context": "https://schema.org",
            "@type": "Person",
            "email": "mailto:buraksaraloglu1@gmail.com",
            "name": "Burak Saraloglu",
            "url": "http://buraksaraloglu.com",
            "logo": "http://buraksaraloglu.com/icon-512x512.png",
            "jobTitle": {
              "@type": "DefinedTerm",
              "inDefinedTermSet": "https://targetjobs.co.uk/careers-advice/job-descriptions",
              "termCode": "456249-web-developer-job-description",
              "name": "Web developer",
              "url": "https://targetjobs.co.uk/careers-advice/job-descriptions/456249-web-developer-job-description",
            }
          }
        `}
        </script>
      </Helmet>
      <Layout>
        <Router basepath="/app">
          <IndexPage path="/" />
        </Router>
      </Layout>
    </>
  )
}

export default App
