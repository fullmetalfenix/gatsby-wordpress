import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <h1 className="home-heading"> Products!</h1>
      {data.allWcProducts.edges.map(({ node }) => (
        
        <div className="home-product-container" key={node.id}>
          <img className="home-products-images" alt="product " src={node.images[0].src} />
          <div className="home-products-details">
            <Link to={node.slug} >
              <p className="home-product-name" >{node.name}</p>
            </Link>
            <div className="home-product-prices-container">
              <p className="home-regular-price">${node.regular_price}</p>
              <p className="home-sale-price">${node.sale_price}!</p>
            </div>
            <Link className="home-product-button-link" href={`http://localhost/gatsbywp/wordpress/public/${node.slug}`}>
              <button>Check It Out</button>
            </Link>  
          </div>
        </div>
      ))}


    </Layout>
  )
}



export const pageQuery = graphql`
query {
    allWcProducts {
      edges {
        node {
          id
          name
          sale_price
          price
          images {
            id
            src
          }
          regular_price
          short_description
          sku
          slug
        }
      }
    }
  
  }`  
