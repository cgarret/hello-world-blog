import React from 'react'
import { Link } from 'gatsby'
import avatar from "../images/jpg/AiaceTelamonio.jpg";
const config = require("../../content/meta/config");

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="logoType">
            <div className="logo">
            <figure class="image is-64x64">
              <img class="is-rounded" src={config.gravatarImgMd5==="" ? avatar : config.gravatarImgMd5 } alt={config.siteTitle} />
              </figure>
            </div>
            <div className="type">
              <h4 class="title is-4">{config.headerTitle}</h4>
              <h6 class="subtitle is-6">{config.headerSubTitle}</h6>
            </div>
        </Link>        
      </div>

      <div id="navbar-menu" className="navbar-menu is-static">
        <div className="navbar-end">
          <Link to="/page-2" className="navbar-item is-secondary">
            Page 2
          </Link>
        </div>
      </div>
       {/* --- STYLES --- */}
       <style jsx>{`
        .logoType {
          align-items: center;
          display: flex;
          flex-direction: "column";
        }
       `}
       </style>
    </div>
  </nav>
)

export default Header
