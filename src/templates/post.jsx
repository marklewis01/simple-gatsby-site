import React from 'react'

import Grid from '@material-ui/core/Grid'

import Container from '../components/Container'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Grid>
    </Grid>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
