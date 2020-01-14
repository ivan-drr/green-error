import React from "react"
import { graphql } from "gatsby"

import "../styles/container.css"
import "../styles/post.css"

export default function PostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="container uk-margin-small-top">
      <div id="blog-post" className="blog-post">
        <h1>{frontmatter.title}</h1>
        <em>{frontmatter.date}</em>
        <div
          className="blog-post-content uk-margin-large-top"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
