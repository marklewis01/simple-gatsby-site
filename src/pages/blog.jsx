import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

const FeaturesPage = ({ classes, data }) => (
  <Grid container>
    <Grid item xs={12}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="display2" align="center">
            Blog Posts
          </Typography>
          <br />
          <hr />
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Link key={node.id} to={node.frontmatter.path}>
                <li>{node.frontmatter.title}</li>
              </Link>
            ))}
          </ul>
          <hr />
          <Typography variant="body1">
            <Link to="/">Go back to the homepage</Link>
          </Typography>
        </Grid>
      </Container>
    </Grid>
  </Grid>
)

export default withStyles(styles)(FeaturesPage)

export const postQuery = graphql`
  query BlogPosts {
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
