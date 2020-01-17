const path = require(`path`)
const fs = require("fs")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const listedPostTemplate = path.resolve(`src/templates/listedPost.js`)

  const blogPost = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (blogPost.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogPost.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {},
    })
  })
}
