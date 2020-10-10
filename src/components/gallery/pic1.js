// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// const Pic1 = () => {
//   const data = graphql`
//     query($slug: String!) {
//       allImagesJson {
//         edges {
//           node {
//             title
//             image {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `
//   console.log(data.allImageJson)
//   console.log(data?.childImageSharp?.fluid)
//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture not found</div>
//   }

//   return <Img className="carousel-image" fluid={data.childImageSharp.fluid} />
// }

// export default Pic1

// // allImagesJson {
// //     edges {
// //       node {
// //         title
// //        image {
// //         childImageSharp {
// //           fluid {
// //             base64
// //             tracedSVG
// //             srcWebp
// //             srcSetWebp
// //             originalImg
// //             originalName
// //           }
// //         }
// //       }
// //       }
// //     }
// // const Pic1 = () => {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       placeholderImage: file(relativePath: { eq: "grid/1.jpg" }) {
// //         childImageSharp {
// //           fluid(maxWidth: 1000) {
// //             ...GatsbyImageSharpFluid
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   if (!data?.placeholderImage?.childImageSharp?.fluid) {
// //     return <div>Picture not found</div>
// //   }

// //   return (
// //     <Img
// //       className="carousel-image"
// //       fluid={data.placeholderImage.childImageSharp.fluid}
// //     />
// //   )
// // }

// // export default Pic1

// // https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/
