import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWcProducts.edges.map(({ node }) => (
        <div key={node.id}>
          <img src={node.images[0].src} />
          <Link to={node.slug}>
            <p>{node.name}</p>
          </Link>
          <p >{node.name}</p>
          <p >{node.slug}</p>
          <p >{node.regular_price}</p>
          <p >{node.sale_price}</p>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>

        </div>
      ))}


    </Layout>
  )
}

{/*export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`*/}

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
