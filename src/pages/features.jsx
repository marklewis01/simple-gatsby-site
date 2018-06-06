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
  featureImgRound: {
    borderRadius: '50%',
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
            <Grid item xs={8}>
              <Typography variant="subheading" align="center">
                Quickly build an effective pricing table for your potential
                customers with this Bootstrap example. It's built with default
                Bootstrap components and utilities with little customization.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionDark} justify="center">
      <Container>
        <Grid container justify="space-around" spacing={24}>
          <Grid item xs={12} md={4} className={classes.featureCard}>
            <img
              src="https://source.unsplash.com/random/150x150"
              alt=""
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
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureCard}>
            <img
              src="https://source.unsplash.com/random/150x150"
              alt=""
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
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureCard}>
            <img
              src="https://source.unsplash.com/random/150x150"
              alt=""
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
          </Grid>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionLight}>
      <Container flex center>
        <Grid item xs={12} md={10}>
          <Grid
            container
            spacing={32}
            alignItems="center"
            justify="space-around"
          >
            <Grid item xs={12} md={4}>
              <Img
                resolutions={data.image1.childImageSharp.resolutions}
                title="USB image"
                alt="some techy image"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="title" align="left">
                Vestibulum id ligula.
              </Typography>
              <Typography variant="body1" align="left">
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
          >
            <Grid item xs={12} md={7}>
              <Typography variant="title" align="left">
                Vestibulum id ligula.
              </Typography>
              <Typography variant="body1" align="left">
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Img
                resolutions={data.image2.childImageSharp.resolutions}
                title="USB image"
                alt="some techy image"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={32}
            alignItems="center"
            justify="space-around"
          >
            <Grid item xs={12} md={4}>
              <Img
                resolutions={data.image3.childImageSharp.resolutions}
                title="USB image"
                alt="some techy image"
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="title" align="left">
                Vestibulum id ligula.
              </Typography>
              <Typography variant="body1" align="left">
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

export const query = graphql`
  query GatsbyImageSampleQuery {
    image1: file(relativePath: { eq: "img/feature-1.jpg" }) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    image2: file(relativePath: { eq: "img/feature-2.jpg" }) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    image3: file(relativePath: { eq: "img/feature-3.jpg" }) {
      childImageSharp {
        resolutions(width: 300, height: 300) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
