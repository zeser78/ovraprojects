import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-ovraprojects.png"

const Header = () => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-around`,
        alignItems: `center`,
      }}
    >
      <Link to="/">
        <img src={logo} width="250px" />
      </Link>
      <div
        className="menu"
        style={{
          // margin: `0 auto`,
          // maxWidth: `100%`,
          // padding: `1.45rem 1.0875rem`,
          display: `flex`,
          flexDirection: "row",
          justifyContent: `space-around`,
          flexWrap: "no-wrap",
          alignItems: `space-around`,
          width: `350px`,
          fontWeight: `400`,
          letterSpacing: `1px`,
          fontSize: `14px`,
          textDecoration: `none`,
        }}
      >
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link>Team</Link>
        </div>
        <div>
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
