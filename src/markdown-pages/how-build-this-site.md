---
path: "/how-build-this-site"
date: "2019-05-04"
title: "How to build this site"
description: "This site is build on Gatsbyjs framework, based on markdown pages for posts with Prismjs to style code fragments. Also I used UIkit for global styles just to give it a try. Anyways UIkit is used mostly for animations purpose, these cards and minors fits. The responsive part of the app is build on just css."
---

## Index
- [Getting started](#getting-started)
- [Structure](#structure)
  * [Folders](#folders)
  * [Files](#files)
- [Setup](#setup)
  * [`layout.js`](#-layoutjs-)
  * [`logo.js`](#-logojs-)
  * [`index.js`](#-indexjs-)
  * [`gatsby-config.js`](#-gatsby-configjs-)
- [First Launch](#first-launch)
- [Starting to build](#starting-to-build)
  * [`index.js`](#-indexjs--1)
  * [`layout.js`](#-layoutjs--1)
  * [`article.js`](#-articlejs-)
  * [`seo.js`](#-seojs-)
  * [`sidenav.js`](#-sidenavjs-)
  * [`search-bar.js`](#-search-barjs-)
  * [`logo.js`](#-logojs--1)
- [Creating first entry](#creating-first-entry)


## Getting started
First of all you need to install [Node.js](https://nodejs.org).

Once done that type this in your project folder or at any other desired location:
```bash
npm install -g gatsby-cli
```
_Dash g means --global. So we will install gatsby globaly on our computer._

Now we can just run this to create our gatsby site:
```bash
gatsby new my-gatsby-site
cd my-gatsby-site
```
## Structure
This is our first **project structure**:
```bash
my-gatsby-site/
├── .cache
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── public/
├── LICENSE
├── node-modules/
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── components
    │   ├── header.js
    │   ├── image.js
    │   ├── layout.css
    │   ├── layout.js
    │   └── seo.js
    ├── images
    │   ├── gatsby-astronaut.png
    │   └── gatsby-icon.png
    └── pages
        ├── 404.js
        ├── index.js
        └── page-2.js
```
Gatsby is based on [React](https://reactjs.org/ ) so if you already know it, it's almost the same.
You can find next content on [Gatsby Project Structure](https://www.gatsbyjs.org/docs/gatsby-project-structure/).
### Folders
* **`.cache/`** _Automatically generated_. This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the `.gitignore` file if not added already.
* **`public/`** _Automatically generated._ The output of the build process will be exposed inside this folder. Should be added to the `.gitignore` file if not added already.
* **`src/`** This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
	- **`components/`** Here we put Reactjs components.
	- **`images/`** Images that we will query.
	- **`pages/`** Components under src/pages become pages automatically with paths based on their file name. Check out the [pages recipes](https://www.gatsbyjs.org/docs/recipes/pages-layouts) for more detail.

### Files
- **`gatsby-browser.js`** This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
- **`gatsby-config.js`** This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail.
- **`gatsby-node.js`** This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
- **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## Setup
We will not use `gatsby-ssr.js`. Delete all inside images folder and `page-2.js file`.

On components folder we will not use `header.js`. Rename _`image.js`_ to `logo.js`.

Finally on `src/` create  three folders,  _`styles/`_, _`templates/`_ and _`markdown-pages/`_. And put `layout.css` on `styles/` folder. If we skip git files also delete `LICENSE` and `README.md`.

Project structure now should be:
```bash
my-gatsby-site/
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── package.json
├── package.json.lock
├── node_modules/
└── src
    ├── components
    │   ├── layout.js
    │   ├── logo.js
    │   └── seo.js
    ├── images
    ├── markdown-pages
    ├── pages
    │   ├── 404.js
    │   └── index.js
    ├── styles
    │   └── layout.css
    └── templates
```
On components directory we put modular elements for our pages. like a navbar, wrappers... etc. Let's fix the import that we broke moving `layout.css`, deleting Header component, and renaming Image component.

### `layout.js`
Change this:
```javascript
import Header from "./header"
import "./layout.css"
```
for:
```javascript
import "../styles/layout.css"
```
&nbsp;
Finally on return statement delete this line:
```jsx
<Header siteTitle={data.site.siteMetadata.title} />
```
---

### `logo.js`
Rename Image to Logo, change this:
```javascript
const Image = () => {...}
```
```javascript
export default Image
```
to:
```javascript
const Logo = () => {...}
```
```javascript
export default Logo
```
---
### `index.js`
Rename Image component, change this:
```javascript
import Image from "../components/image"
```
```jsx
<Image />
<Link to="/page-2/">Go to page 2</Link>
```
for:
```javascript
// import Logo from "../components/logo"
```
```jsx
{/* <Logo /> */}
<Link to="/">Go to this page</Link>
```
We have no logo yet so comment or delete it.

Finally add this line above main tag:
```jsx
<h1>{data.site.siteMetadata.title}</h1>
```
---
### `gatsby-config.js`
We deleted our favicon too, which was inside image folder. We need to unreferenced it on `gatsby-config.js` at **gatsby-plugin-manifest** deleting or commenting icon line:
```javascript
{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`
}
```

## First Launch
To develop our site we have two options now.
```bash
gastby develop
```
or
```bash
npm start
```
Which means exactly the same. Cause start command of npm for this site invokes gatsby develop command. See on `package.json`:
```json
"scripts": {
    "develop": "gatsby develop",
    "start": "npm run develop"
}
```
Now we have running our site, which will **auto-reload** every time that we make a change on it.

## Starting to build
Now we have a clean installation for our markdown blog, let's jump to it.

### `index.js`
First thing to do is think how our index page should works. This page could be found on `src/pages/index.js`.

We will use:
```javascript
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import AnimatedTitle from "../components/animated-title"

import "../styles/title.css"
```
So why **graphql**. As a blog we need to list each of our entries somehow, graphql will help us to inject each existent article(our component) inside of a grid. In other hand **SEO** component is just for commonly known as search engine optimization. Layout is our wrapper component and the other twos are just custom styles and effects.

At this part we need to create our component, we initialize it as a functional constant this time. The only difference between a function declaration and a variable assignment to a function it's just declared functions are at the top of the scope, so this way to declare it is just a commonly method used on react framework to make sure that function will be declared correctly according to the **lifecycle**.

We need to **feed IndexPage** with the following object to get all markdowns files on the custom directory of `src/markdown-pages`.
**Frontmatter** is the way that gatsby takes relevant metadata of our markdown file, which we write manually(see table at the start of this file on github or raw).

Then just add a return statement to render the content:
```javascript
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
```

And finally here is the query of graphql to get all of that markdown files. Assert that frontmatter contains the fields you will use to filter and list them:
```javascript
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
```

---

### `layout.js`
Once done that we need to define Layout, SEO and Article components. Let's start with Layout. You can find it on `src/components` folder and it should look like this:
```javascript
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidenav from "./sidenav"

import "../styles/container.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sidenav siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main style={{ marginTop: "3rem" }}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

In this case we define a query inside of Layout to get the title site asynchronously, we will use this a lot. We also feed Layout with an object called children to manage where render the content inside this component.

---

### `article.js`
This component just take care about how we list each markdown page, in this case we use cards:
```javascript
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
```
We use Link to redirect the user with routing, we'll use this as an alternative of commons "a" tags.

---

### `seo.js`
This one is just the default SEO generated by gatsby, so we won't dive in, it looks like this:
```javascript
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
```

---

### `sidenav.js`
This component will be with the user always around the app, it will help them to navigate.

We'll use:
```javascript
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import SearchBar from "./search-bar"
import Logo from "../components/logo"

import "../styles/sidenav.css"
import "../styles/nav-button.css"
```
In this case we have a Link component, which let us to manage a redirect with routing, SearchBar, which help the user to search an article by the title and the Logo component, which load your logo with queries.

The following code it's just styles and html structure so I won't dive in:
```javascript
const Sidenav = ({ siteTitle }) => (
  <header>
    <a
      id="nav-button"
      className="uk-position-left uk-animation-slide-left uk-icon-button"
      type="button"
      href="#nav-open"
      uk-toggle="target: #offcanvas-nav"
      style={{ borderColor: "transparent" }}
    >
      <span style={{ fontSize: "2em", color: "rgb(198, 198, 198)" }}>✣</span>
    </a>

    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <ul className="uk-nav uk-nav-default" style={{ fontSize: "1em" }}>
          <a
            id="nav-button-exit"
            className="uk-position-right uk-animation-slide-top uk-icon-button"
            type="button"
            uk-toggle="target: #offcanvas-nav"
            href="#nav-close"
            style={{ borderColor: "transparent" }}
          >
            <span style={{ fontSize: "1.3em", color: "rgb(198, 198, 198)" }}>
              ✣
            </span>
          </a>

          <li className="uk-nav-header" style={{ marginTop: "0" }}>
            <div className="size-logo" style={{ maxWidth: `1200px` }}>
              <Logo />
            </div>
          </li>
          <li className="uk-transition-toggle uk-parent uk-active">
            <Link
              to="/"
              className="sidenav-link uk-transition-scale-up uk-transition-opaque"
            >
              <span
                className="uk-icon-button"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              >
                ☴
              </span>
              Blog
            </Link>

            <ul className="uk-nav-sub">
              <li>
                <SearchBar />
              </li>
            </ul>
          </li>

          <li className="uk-transition-toggle">
            <Link
              to="/about/"
              className="sidenav-link uk-transition-scale-up uk-transition-opaque"
            >
              <span
                className="uk-icon-button"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              >
                ✦
              </span>
              About
            </Link>
          </li>

          <li className="uk-transition-toggle">
            <Link
              to="/contact/"
              className="sidenav-link uk-transition-scale-up uk-transition-opaque"
            >
              <span
                className="uk-icon-button"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              >
                ⌦
              </span>
              Contact
            </Link>
          </li>

          <li>
            <Link
              className="sidenav-link"
              to="/sources/"
              style={{
                textAlign: "center",
                marginTop: "1em",
                boxShadow: "none",
                border: "none",
              }}
            >
              <button id="sourcesBtn" className="uk-button uk-button-secondary">
                <span
                  style={{ fontSize: "1.3em", color: "rgb(198, 198, 198)" }}
                >
                  ｛｝
                </span>{" "}
                Sources
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Sidenav.propTypes = {
  siteTitle: PropTypes.string,
}

Sidenav.defaultProps = {
  siteTitle: ``,
}

export default Sidenav
```
Check that I'm not using any kind of icons library and I'm not even taking UIkit icons. That's cause I will need to query them as the Logo but not as an image, just like icons, but with UIkit icons this way to inject them have some conflicts at the first load, so cause there are just three of them I used special characters as the solution, which is faster and more simple.

---

### `search-bar.js`
This is a really simple component which takes care of searching the articles by title:
```javascript
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
```

---

### `logo.js`
This one is a query component which just take care of load a specific resource:
```javascript
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "light-logo/logo_transparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo
```
We can resize the image and make it responsive with that properties.

---
That's it. We have created all components. Now if you want you can create contact and about **pages**, inside pages cause they are a **static content** and same thing to apply functionality to sources button on sidenav component.

## Creating first entry
To create a entry or an article just like this one add a new file into `src/markdown-pages` folder. You need to define the frontmatter first which make our app able to handle metadatas of the article, this is an example of a frontmatter:
```markdown
---
path: "/how-build-this-site"
date: "2019-05-04"
title: "How to build this site"
description: "This site is build on Gatsbyjs framework, based on markdown pages for posts with Prismjs to style code fragments. Also I used UIkit for global styles just to give it a try. Anyways UIkit is used mostly for animations purpose, these cards and minors fits. The responsive part of the app is build on just css."
---
```
Notice that description should be on **one line** with cause that quotes don't allow multiline content.Once done that just write your article on markdown and this app will serve it automatically.

To make possible recreate markdown code boxes we have **prismjs** added on `gatsby-browser.js`. On `gatsby-config.js` we have the dependencies properties where we tell to the plugin gatsby filesystem where to look markdowns:
```javascript
options: {
    name: `markdown-pages`,
	path: `${__dirname}/src/markdown-pages`,
},
```

Finally on `gatsby-node.js` we "fetch" all markdowns files with a **static** query.
