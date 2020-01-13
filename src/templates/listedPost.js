import React from "react"

const Article = ({ articleTitle, articleDesc, articleImage, articleDate }) => (
  <div id="article" className="uk-card uk-card-default uk-width-1-2@m">
    <div className="uk-card-header">
      <div className="uk-grid-small uk-flex-middle" uk-grid="true">
        <div className="uk-width-auto">
          <img
            alt={"img-" + articleTitle}
            className="uk-border-circle"
            width="40"
            height="40"
            src={"images/" + articleImage}
          />
        </div>
        <div className="uk-width-expand">
          <h3 className="uk-card-title uk-margin-remove-bottom">
            {articleTitle}TITLE
          </h3>
          <p className="uk-text-meta uk-margin-remove-top">
            <time dateTime="2016-04-01T19:00">{articleDate}DATE</time>
          </p>
        </div>
      </div>
    </div>
    <div className="uk-card-body">
      <p>{articleDesc}DESCRIPTION</p>
    </div>
    <div className="uk-card-footer">
      <a href={"URL"+articleTitle} className="uk-button uk-button-text"
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
)

export default Article
