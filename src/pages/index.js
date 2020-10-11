import React from "react"
import { Link } from "gatsby"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
// import { Carousel } from "react-responsive-carousel"
import Slide2 from "../components/slide2"
import Slide3 from "../components/slide3"
import slide1 from "../images/slide-1.jpg"
import slide2 from "../images/slide-2.jpg"
import Deck from "../components/deck"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel>
      <div className="carousel__slide">
        <Image />
        {/* <img className="carousel-image" src={slide1} /> */}
      </div>
      <div className="carousel__slide">
        <Slide2 />
        {/* <img className="carousel-image" src={slide2} /> */}
      </div>
      <div className="carousel__slide">
        <Slide3 />
      </div>
    </Carousel>
  </Layout>
)

export default IndexPage
