import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const product = data.allWcProducts.edges[0].node
  console.log(product)
  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.regular_price }} />
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
      }
    }
  }

}`  