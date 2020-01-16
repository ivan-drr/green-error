import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"

import '../styles/title.css'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Article key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="title">
        <span className="letter" data-letter="G">G</span>
        <span className="letter" data-letter="R">R</span>
        <span className="letter" data-letter="E">E</span>
        <span className="letter" data-letter="E">E</span>
        <span className="letter" data-letter="N">N</span>
        <span className="letter" data-letter="-">-</span>
        <span className="letter" data-letter="E">E</span>
        <span className="letter" data-letter="R">R</span>
        <span className="letter" data-letter="R">R</span>
        <span className="letter" data-letter="O">O</span>
        <span className="letter" data-letter="R">R</span>
      </div>
      {animateTitle()}
      <div
        className="uk-grid-medium uk-child-width-expand@s uk-text-center"
        uk-grid="true"
      >
        {Posts}
      </div>
    </Layout>
  )
}

function animateTitle() {
  setTimeout(() => {
    const letters = Array.prototype.slice.call(document.getElementsByClassName('letter'));

    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.color = 'rgb(84, 33, 110)';
        letter.style.transform = 'rotateX(0deg) rotateY(-40deg) rotateZ(0deg)';
        setTimeout(() => {
          letter.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
        }, 300 + (Math.random(1, 11)*500))
      }, 100 + (Math.random(1, 11)*500))
    })
  }, 500)
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
