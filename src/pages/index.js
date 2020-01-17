import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import AnimatedTitle from "../components/animated-title"

import "../styles/title.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Article key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog" />
      <AnimatedTitle />
      <div
        className="uk-grid-medium uk-child-width-expand@s uk-text-center"
        uk-grid="true"
      >
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage

export const listPosts = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            description
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
