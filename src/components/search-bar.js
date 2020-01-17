import React from "react"

const SearchBar = () => (
  <div id="searchBar">
    <span className="sidenav-link" href="#project-search">
      Search project
    </span>
    <div id="searchInput" className="uk-inline">
      <input
        className="uk-input"
        onChange={e => handleSearch(e)}
        style={{
          width: "10em",
          height: "1.4em",
          marginLeft: "1em",
        }}
      />
      <span className="uk-form-icon uk-form-icon-flip">⌨</span>
    </div>
  </div>
)

const handleSearch = event => {
  const value = event.target.value.toLowerCase()
  const articles = Array.prototype.slice.call(
    document.getElementsByClassName("article")
  )

  articles.forEach(article => {
    if (!article.id.toLowerCase().includes(value))
      article.style.display = "none"
    else article.style.display = "block"
  })
}

export default SearchBar
