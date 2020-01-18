import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About:</h1>
    <p>
      Gmail: <a href="mailto:ivan.delrr@gmail.com">ivan.delrr@gmail.com</a> <br/>
      Github: <a href="https://github.com/ivan-drr">ivan-drr</a> <br/>
      Linkedin: <a href="https://www.linkedin.com/in/ivan-del-rio/">ivan-del-rio</a>
    </p>
  </Layout>
)

export default AboutPage
