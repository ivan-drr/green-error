import React from "react"
import { Link } from "gatsby"

import "../styles/article.css"

const Article = ({ post }) => (
  <div
    id={post.frontmatter.title}
    className="article uk-card uk-card-default uk-width-1-2@m uk-animation-slide-left-small"
  >
    <div className="uk-card-header">
      <div className="uk-grid-small uk-flex-middle" uk-grid="true">
        <div className="uk-width-expand">
          <h3 className="uk-card-title uk-margin-remove-bottom">
            {post.frontmatter.title}
          </h3>
          <p className="uk-text-meta uk-margin-remove-top">
            <time dateTime="2016-04-01T19:00">{post.frontmatter.date}</time>
          </p>
        </div>
      </div>
    </div>
    <div className="uk-card-body">
      <p>{post.frontmatter.description}</p>
    </div>
    <div className="uk-card-footer">
      <Link
        id="read-more"
        to={post.frontmatter.path}
        className="uk-button uk-button-text"
        style={{
          textDecoration: "none",
          boxShadow: "none",
          border: "none",
        }}
      >
        Read more
      </Link>
    </div>
  </div>
)
export default Article
