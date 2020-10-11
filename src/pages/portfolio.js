import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div>
      <Gallery />
    </div>
  </Layout>
)

export default Portfolio
