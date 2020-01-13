import React from "react"

const Article = ({ articleTitle, articleDesc, articleImage, articleDate }) => (
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
            alt={"img-" + articleTitle}
            class="uk-border-circle"
            width="40"
            height="40"
            src={"images/" + articleImage}
          />
        </div>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">
            {articleTitle}TITLE
          </h3>
          <p class="uk-text-meta uk-margin-remove-top">
            <time datetime="2016-04-01T19:00">{articleDate}DATE</time>
          </p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p>{articleDesc}DESCRIPTION</p>
    </div>
    <div class="uk-card-footer">
      <a href={"URL"+articleTitle} class="uk-button uk-button-text">
        Read more
      </a>
    </div>
  </div>
)

export default Article
