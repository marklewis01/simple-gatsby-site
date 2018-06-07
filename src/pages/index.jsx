import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Container from '../components/Container'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  diagSection: {
    position: 'absolute',
    backgroundColor: 'grey',
    top: -100,
    left: 0,
    right: 0,
    height: 600,
    transform: `skewY(-5deg)`,
    '&:after': {
      content: `''`,
      display: 'block',
      clear: 'both',
    },
  },
  diagOpp: {
    marginTop: 200,
    transform: `skewY(5deg)`,
    width: '100%',
  },
  diagContent: {
    position: 'relative',
    height: 760,
    color: 'white',
  },
})

const Index = ({ classes, data }) => {
  return (
    <Grid container>
      <Grid container className={classes.diagSection}>
        <Grid item className={classes.diagOpp}>
          <Container flex>
            <Grid item xs={8}>
              <Typography variant="display1">Hi people</Typography>
              <Typography variant="body1">
                Welcome to your new Gatsby site. Now go build something great.
              </Typography>
              <Img
                sizes={data.hero1.childImageSharp.sizes}
                // resolutions={data.image3.childImageSharp.resolutions}
                title="phone and pen"
                alt="some techy image"
              />
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Container flex>
            <Grid item xs={8}>
              <Typography variant="display1">2nd section</Typography>
              <Typography variant="body1">further text.</Typography>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Index)

export const homeHero = graphql`
  fragment heroImage on File {
    childImageSharp {
      sizes(maxWidth: 350) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
  query heroImages {
    hero1: file(relativePath: { eq: "img/phone-pen.png" }) {
      ...heroImage
    }
  }
`
