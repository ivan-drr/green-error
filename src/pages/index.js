import React from "react"

import Layout from "../components/layout"
import Article from "../components/article"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div
      class="uk-grid-medium uk-child-width-expand@s uk-text-center"
      uk-grid="true"
    >
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  </Layout>
)

export default IndexPage
