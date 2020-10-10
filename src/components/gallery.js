import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentA = () => (
  <StaticQuery
    query={graphql`
      {
        allImagesJson {
          edges {
            node {
              image
              gallery {
                image
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allImagesJson.edges.map(item => {
          return (
            <div>
              <img
                src={item.node.image}
                alt={`image_${item.node.image}`}
                style={{ width: "800pzx", height: "600px" }}
              />
              <hr />
              <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                gallery items for {item.node.image}
              </p>
              {item.node.gallery.map(galleryItem => {
                return (
                  <img
                    src={galleryItem.image}
                    alt={`gallery_item_${galleryItem.image}`}
                    style={{ width: "800px", height: "600px" }}
                  />
                )
              })}
              <hr />
            </div>
          )
        })}
      </div>
    )}
  />
)
export default ComponentA

// https://valtism.com/src/gatsby-multiple-images-json.html

// https://www.gatsbyjs.com/docs/working-with-images/

// https://www.gatsbyjs.com/docs/gatsby-image/