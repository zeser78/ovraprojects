import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide2 from "../components/slide2"
import Slide3 from "../components/slide3"
import Image from "../components/image"
import Pic1 from "../components/gallery/pic1"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="parent">
      <div className="box">
        <Pic1 />
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
