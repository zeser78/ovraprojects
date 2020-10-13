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
                fluid {
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
      {data.allGalleryJson.edges.map(item => {
        return (
          <div className="box">
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
