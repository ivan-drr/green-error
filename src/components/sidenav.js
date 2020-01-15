import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Logo from "../components/logo"

import "../styles/sidenav.css"
import "../styles/nav-button.css"

const Sidenav = ({ siteTitle }) => (
  <header>
    <button
      id="nav-button"
      className="uk-position-left uk-animation-slide-left uk-icon-button"
      type="button"
      uk-toggle="target: #offcanvas-nav"
      uk-icon="chevron-right"
    />

    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <ul className="uk-nav uk-nav-default" style={{ fontSize: "1em" }}>
          <button id="nav-button-exit"
            className="uk-position-right uk-animation-slide-top uk-icon-button"
            type="button"
            uk-toggle="target: #offcanvas-nav"
            uk-icon="chevron-left"
          />

          <li className="uk-nav-header" style={{ marginTop: '0' }}>
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
                uk-icon="commenting"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              />
              Blog
            </Link>

            <ul className="uk-nav-sub">
              <li>
                <a className="sidenav-link"
                  onClick={() => {
                    const inputStyle = document.getElementById('searchBar').style;
                    inputStyle.display === 'block'
                      ? inputStyle.display = 'none'
                      : inputStyle.display = 'block'
                  }}
                  href="#project-search"
                >
                  Search project
                </a>
                <div id="searchBar" className="uk-inline" style={{ display: "none" }}>
                  <input
                    className="uk-input"
                    style={{
                      width: "10em",
                      height: "1.4em",
                      marginLeft: "1em"
                    }}
                  />
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    uk-icon="icon: search"
                    style={{ marginRight: "2.8em" }}
                  />
                </div>
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
                uk-icon="quote-right"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              />
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
                uk-icon="mail"
                style={{ marginLeft: "1em", marginRight: "0.6em" }}
              />
              Contact
            </Link>
          </li>

          <li>
            <Link className="sidenav-link"
              to="/sources/"
              style={{
                textAlign: "center",
                marginTop: "1em",
                boxShadow: "none",
                border: "none"
              }}
            >
              <button id="sourcesBtn" className="uk-button uk-button-secondary">
                <span uk-icon="code" /> Sources
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
