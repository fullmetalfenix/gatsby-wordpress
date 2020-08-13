import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const product = data.allWcProducts.edges[0].node
  console.log(product)
  function addProductToCart(){
    fetch(`../wp-json/cocart/v1/add-item?product_id=10`, {"method": "POST"}) 
    .then(x => x.json)
    .then(response => console.log(response))
  }

  return (
    <Layout>
      <div className="pp-container">
        <img alt={product.images[0].src} src={product.images[0].src} />
        <div className="pp-product-info">
          <h2>{product.name}</h2>
          <div>
            <p className="pp-reg">{product.regular_price}</p>
            <p className="pp-sale">${product.sale_price}!</p>
            </div>
        </div>
        {/*<p></p>{product.short_description.slice(3).slice(0, -5)}*/}
        <p className="pp-desc">{product.description.slice(3).slice(0, -5)}</p>
        <h1>{product.related_ids}</h1>
        <button className="pp-atc" onClick={addProductToCart}>Add To Cart</button>
      </div>
    </Layout>
  )
}
export const query = graphql`
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
        description
        related_ids
      }
    }
  }

}`  