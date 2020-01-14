import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "../styles/container.css"

const Article = () => (
  <StaticQuery
    query={graphql(`
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
    `)}
    render={data => (
      <div id="article" className="uk-card uk-card-default uk-width-1-2@m">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                {data.markdown.title}
              </h3>
              <p className="uk-text-meta uk-margin-remove-top">
                <time dateTime="2016-04-01T19:00">{data.markdown.date}</time>
              </p>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <p>{data.markdown.description}</p>
        </div>
        <div className="uk-card-footer">
          <a href={data.markdown.path} className="uk-button uk-button-text"
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
              border: 'none'
            }}
          >
            Read more
          </a>
        </div>
      </div>
    )}
  />
)

export default Article
