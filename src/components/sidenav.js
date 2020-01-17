import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import SearchBar from "./search-bar"
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
      style={{ borderColor: "transparent" }}
    >
      <span style={{ fontSize: "2em", color: "rgb(198, 198, 198)" }}>✣</span>
    </button>

    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <ul className="uk-nav uk-nav-default" style={{ fontSize: "1em" }}>
          <button
            id="nav-button-exit"
            className="uk-position-right uk-animation-slide-top uk-icon-button"
            type="button"
            uk-toggle="target: #offcanvas-nav"
            style={{ borderColor: "transparent" }}
          >
            <span style={{ fontSize: "1.3em", color: "rgb(198, 198, 198)" }}>
              ✣
            </span>
          </button>

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
