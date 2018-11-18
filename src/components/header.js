import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import avatar from '../images/jpg/AiaceTelamonio.jpg'
import ErrorBoundary from '../error'
const config = require('../../content/meta/config')

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: true,
      fixed: false,
    }
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    return (
      <ErrorBoundary>
        <StaticQuery
          query={graphql`
            query headerQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => {
            return (
              <>
                <nav
                  className="navbar is-fixed-top"
                  role="navigation"
                  aria-label="main navigation"
                  style={{
                    borderBottom: 'solid 1px #dddddd',
                  }}
                >
                  <div className="navbar-brand">
                    <div className="navbar-item">
                      <Link to="/" className="logoType">
                        <div className="logo">
                          <figure className="image is-64x64">
                            <img
                              className="is-rounded"
                              src={
                                config.gravatarImgMd5 === ''
                                  ? avatar
                                  : config.gravatarImgMd5
                              }
                              alt={data.site.siteMetadata.title}
                            />
                          </figure>
                        </div>
                        <div className="type">
                          <h4 className="title is-4">
                            {data.site.siteMetadata.title}
                          </h4>
                          <h6 className="subtitle is-6">
                            {config.headerSubTitle}
                          </h6>
                        </div>
                      </Link>
                    </div>
                    <a
                      role="button"
                      className="navbar-burger burger"
                      aria-label="menu"
                      aria-expanded="false"
                      data-target="navbarBasicExample"
                      href="#"
                    >
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                      <span aria-hidden="true" />
                    </a>
                  </div>
                  <div
                    className={
                      this.state.isActive
                        ? 'navbar-menu is-active'
                        : 'navbar-menu'
                    }
                    id="navbarBasicExample"
                  >
                    <div className="navbar-start">
                      <Link to="/page-2" className="navbar-item is-secondary">
                        Page 2
                      </Link>
                    </div>
                    <div className="navbar-end">
                      <a
                        className="navbar-item"
                        href="https://github.com/aaronklaser"
                      >
                        <span className="fab fa-lg" style={{ marginRight: 5 }}>
                          <FontAwesomeIcon icon={faGithub} />
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
                {/* --- STYLES --- */}
                <style jsx="true">
                  {`
                    .logoType {
                      align-items: center;
                      display: flex;
                      flex-direction: 'column';
                    }
                  `}
                </style>
              </>
            )
          }}
        />
      </ErrorBoundary>
    )
  }
}

export default Header
