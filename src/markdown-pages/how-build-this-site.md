---
path: "/how-build-this-site"
date: "2019-05-04"
title: "How to build this site"
description: "This site is build on Gatsbyjs framework, based on markdown pages for posts with Prismjs to style code fragments. Also I used UIkit for global styles just to give it a try. Anyways UIkit is used mostly for animations purpose, these cards and minors fits. The responsive part of the app is build on just css."
---

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
      },
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
