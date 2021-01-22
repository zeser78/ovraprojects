import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allGalleryJson {
        edges {
          node {
            title
            description
            image {
              childImageSharp {
                fluid(quality: 90) {
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
    <div className="parent">
      {data.allGalleryJson.edges.map((item, index) => {
       
        return (
          <div key={index} className={`box box-${index}`}>
            <Img
              fluid={item.node.image.childImageSharp.fluid}
              style={{ position: `relative`, minHeight: `100%`  }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
