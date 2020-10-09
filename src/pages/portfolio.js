import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide2 from "../components/slide2"
import Slide3 from "../components/slide3"
import Image from "../components/image"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="parent">
      <div className="box">
        <Image />
      </div>
      <div className="box">
        <Slide2 />
      </div>
      <div className="box">
        <Slide3 />
      </div>
      <div className="box">
        <Slide2 />
      </div>
      <div className="box">
        <Image />
      </div>
      <div className="box">
        <Slide3 />
      </div>
    </div>
  </Layout>
)

export default Portfolio
