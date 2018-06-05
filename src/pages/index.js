import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <h3>Blog Posts</h3>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.frontmatter.path}>
            <li>{node.frontmatter.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
