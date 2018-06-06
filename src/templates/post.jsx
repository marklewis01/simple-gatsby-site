import React from 'react'
import Link from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Container from '../components/Container'

const styles = theme => ({
  sidebarBlog: {
    padding: '1rem',
    backgroundColor: theme.palette.grey[100],
  },
  blogHomeLink: {
    marginTop: `2rem`,
  },
})

const Post = ({ classes, data }) => {
  const { markdownRemark: post } = data
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container flex>
          <Grid item xs={8}>
            <Typography variant="display1">{post.frontmatter.title}</Typography>
            <Typography variant="body1">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.sidebarBlog}>
              <Typography variant="headline">Recent Articles</Typography>
              <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <li>
                    <Typography variant="body2">
                      <Link key={node.id} to={node.frontmatter.path}>
                        {node.frontmatter.title}
                      </Link>
                    </Typography>
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
          <Grid container className={classes.blogHomeLink}>
            <Grid item xs={12}>
              <hr />
              <Typography variant="body1">
                <Link to="/blog">Go back to articles main page</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Post)

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
