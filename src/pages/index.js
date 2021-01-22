import React from "react"
import { Link } from "gatsby"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
// import { Carousel } from "react-responsive-carousel"


import Deck from "../components/deck"
import Slides from "../components/slides"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Slides />

  </Layout>
)

export default IndexPage
