import React from "react"

import Layout from "../components/layout"
import FirstBanner from "../components/first-banner"
import Work from "../components/work"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Burak Saraloglu - Frontend Developer" />
    <FirstBanner />
    <section id="works">
      <Work />
    </section>
  </Layout>
)

export default IndexPage
