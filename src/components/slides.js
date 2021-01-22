import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slides = () => {

  const handleScroll = (event) => {
  let boxSlide = document.querySelectorAll('.slide-box')
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
   scale = Math.min(Math.max(0.00, scale), 13);

    console.log('scale', scale)
    for (let box of boxSlide) {
      console.log(box)
      box.style.transform = `translateX(-${scale * 100}px)`;
    }
    console.log('box',boxSlide.length)

    }
  useEffect(() => {
    let slidesContainer = document.getElementById('slides-container')

    slidesContainer.addEventListener('wheel', handleScroll)
    return () => {
    slidesContainer.removeEventListener('wheel', handleScroll)
    }
  },[])
  
let scale = 1;
// const el = document.querySelector('div');
// box.onwheel = zoom;

  const data = useStaticQuery(graphql`
    query {
      allSlidesJson {
        edges {
          node {
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div id="slides-container">
      {data.allSlidesJson.edges.map((item, index) => {
        return (
          <div key={index} >
            <Img className="slide-box"
              fluid={item.node.image.childImageSharp.fluid}
           
            />
          </div>
        )
      })}
    </div>
  )
}

export default Slides
