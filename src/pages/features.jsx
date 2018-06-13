import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Container from '../components/Container'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const styles = theme => ({
  featureCard: {
    textAlign: 'center',
  },
  featureCardButton: {
    marginBottom: `2rem`,
    marginTop: `3rem`,
  },
  featureContainer: {
    marginTop: `1rem`,
    marginBottom: `1rem`,
    '&:after': {
      borderBottom: `1px solid`,
      borderBottomColor: theme.palette.primary.light,
      content: `''`,
      margin: `3rem`,
      width: `100%`,
    },
  },
  featureContainerLeft: {
    marginTop: `1rem`,
    '&:after': {
      borderBottom: `1px solid`,
      borderBottomColor: theme.palette.primary.light,
      content: `''`,
      margin: `3rem`,
      width: `100%`,
    },
    '&:last-child:after': {
      borderBottom: `none`,
      marginBottom: `unset`,
    },
    '@media (max-width: 600px)': {
      flexFlow: 'wrap-reverse',
      '&:after': {
        borderBottom: 'none',
        margin: `unset`,
      },
      '&:before': {
        borderBottom: `1px solid`,
        borderBottomColor: theme.palette.primary.light,
        content: `''`,
        margin: `3rem`,
        width: `100%`,
      },
      '&:last-child:before': {
        borderBottom: `none`,
        marginBottom: `unset`,
      },
    },
  },
  featureImgRound: {
    borderRadius: '50%',
    maxWidth: `150px`,
    maxHeight: `150px`,
    margin: `0 auto 1.45rem`,
  },
  headline: {
    fontWeight: 300,
    '& span': {
      color: theme.palette.primary.light,
      fontWeight: '100',
    },
  },
  imageCaptions: {
    marginLeft: `2rem`,
    marginRight: `2rem`,
  },
  productImages: {
    borderRadius: '10%',
  },
  sectionLight: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  sectionDark: {
    backgroundColor: theme.palette.grey[300],
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
})

const FeaturesPage = ({ classes, data }) => (
  <Grid container>
    <Grid item xs={12}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="display2" align="center">
            Features
          </Typography>
          <br />
          <hr />
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Typography variant="caption" align="center">
                Inspired by{' '}
                <a
                  href="http://getbootstrap.com/docs/4.0/examples/carousel/"
                  target="_blank"
                >
                  this Bootstrap Example
                </a>.
              </Typography>
              <Typography variant="subheading" align="center">
                Quickly build an effective pricing table for your potential
                customers with this example. It's built with default Matrial-UI
                components and utilities with little customization.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionDark} justify="center">
      <Container>
        <Grid container justify="space-around" spacing={24}>
          <Grid item xs={12} sm={4} className={classes.featureCard}>
            <Img
              sizes={data.camera.childImageSharp.sizes}
              title="camera"
              alt="featured camera"
              className={classes.featureImgRound}
            />
            <Typography variant="headline" align="center">
              Heading
            </Typography>
            <Typography variant="body1" align="center">
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper.
            </Typography>
            <Button
              color="primary"
              variant="raised"
              className={classes.featureCardButton}
            >
              View details...
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.featureCard}>
            <Img
              sizes={data.camera.childImageSharp.sizes}
              title="camera"
              alt="featured camera"
              className={classes.featureImgRound}
            />
            <Typography variant="headline" align="center">
              Heading
            </Typography>
            <Typography variant="body1" align="center">
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper.
            </Typography>
            <Button
              color="primary"
              variant="raised"
              className={classes.featureCardButton}
            >
              View details...
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.featureCard}>
            <Img
              sizes={data.camera.childImageSharp.sizes}
              title="camera"
              alt="featured camera"
              className={classes.featureImgRound}
            />
            <Typography variant="headline" align="center">
              Heading
            </Typography>
            <Typography variant="body1" align="center">
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper.
            </Typography>
            <Button
              color="primary"
              variant="raised"
              className={classes.featureCardButton}
            >
              View details...
            </Button>
          </Grid>
        </Grid>
        <Typography variant="caption" align="center">
          Photo by{' '}
          <a href="https://unsplash.com/@abrkett">Adam Birkett on Unsplash</a>
        </Typography>
      </Container>
    </Grid>
    <Grid container className={classes.sectionLight}>
      <Container flex center>
        <Grid item xs={12} md={12}>
          <Grid
            container
            spacing={40}
            alignItems="center"
            justify="space-around"
            className={classes.featureContainerLeft}
          >
            <Grid item xs={12} sm={5}>
              <Img
                sizes={data.image1.childImageSharp.sizes}
                title="white USB plug"
                alt="some techy image"
                className={classes.productImages}
              />
              <Typography
                variant="caption"
                align="left"
                className={classes.imageCaptions}
              >
                Photo by
                <a href="https://unsplash.com/@abrkett">
                  Adam Birkett on Unsplash
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="display2"
                align="left"
                className={classes.headline}
              >
                First featurette heading. <span>It'll blow your mind.</span>
              </Typography>
              <Typography
                variant="subheading"
                align="left"
                className={classes.headline}
              >
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={40}
            alignItems="center"
            justify="space-around"
            className={classes.featureContainer}
          >
            <Grid item xs={12} sm={7}>
              <Typography
                variant="display2"
                align="left"
                className={classes.headline}
              >
                Oh yeah, it's that good. <span>See for yourself.</span>
              </Typography>
              <Typography variant="subheading" align="left">
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Img
                sizes={data.image2.childImageSharp.sizes}
                // resolutions={data.image2.childImageSharp.resolutions}
                title="phone"
                alt="Photo by Aidan Hancock on Unsplash"
                className={classes.productImages}
              />
              <Typography
                variant="caption"
                align="right"
                className={classes.imageCaptions}
              >
                Photo by{' '}
                <a href="https://unsplash.com/@aidanmh">
                  Aidan Hancock on Unsplash
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={40}
            alignItems="center"
            justify="space-around"
            className={classes.featureContainerLeft}
          >
            <Grid item xs={12} sm={5}>
              <Img
                sizes={data.image3.childImageSharp.sizes}
                // resolutions={data.image3.childImageSharp.resolutions}
                title="keyboard"
                alt="some techy image"
                className={classes.productImages}
              />
              <Typography
                variant="caption"
                align="left"
                className={classes.imageCaptions}
              >
                Photo by{' '}
                <a href="https://unsplash.com/@hugobarbosa">
                  Hugo Barbosa on Unsplash
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                variant="display2"
                align="left"
                className={classes.headline}
              >
                And lastly, this one. <span>Checkmate.</span>
              </Typography>
              <Typography variant="subheading" align="left">
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>
)

export default withStyles(styles)(FeaturesPage)

export const squareFeatureImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      sizes(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const circleFeatureImage = graphql`
  fragment circleImage on File {
    childImageSharp {
      sizes(maxWidth: 150, maxHeight: 150) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const query = graphql`
  query featureImages {
    image1: file(relativePath: { eq: "img/feature-1.jpg" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "img/feature-2.jpg" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "img/feature-3.jpg" }) {
      ...squareImage
    }
    camera: file(relativePath: { eq: "img/camera-1.jpg" }) {
      ...circleImage
    }
  }
`

// childImageSharp {
//   resolutions(width: 300, height: 300) {
//     ...GatsbyImageSharpResolutions
//   }
// }
