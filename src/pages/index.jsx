import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Container from '../components/Container'

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import SmsIcon from '@material-ui/icons/Sms'
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck'
import TagFacesIcon from '@material-ui/icons/TagFaces'

const styles = theme => ({
  awardItems: {
    marginBottom: `.5rem`,
    marginTop: `1rem`,
    paddingRight: `2rem`,
    '@media (max-width: 600px)': {
      paddingRight: 'unset',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  diagSection: {
    position: 'relative',
    backgroundColor: 'grey',
    marginBottom: `3rem`,
    top: -150,
    height: 650,
    transform: `skewY(-5deg)`,
    '@media (max-width: 960px)': {
      height: `500px`,
      marginBottom: `-4rem`,
    },
    '@media (max-width: 600px)': {
      marginBottom: `-4rem`,
    },
  },
  diagOpp: {
    marginTop: 150,
    position: 'relative',
    transform: `skewY(5deg)`,
    width: '100%',
  },
  featureIcon: {
    alignItems: `center`,
    backgroundColor: `white`,
    borderRadius: `50%`,
    boxShadow: theme.shadows[5],
    display: `flex`,
    justifyContent: `center`,
    marginBottom: `1rem`,
    marginTop: `.5rem`,
    padding: `2rem`,
    '& svg': {
      fontSize: `2.5rem`,
      color: theme.palette.primary.main,
    },
  },
  heroWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: `1rem`,
    '& h1, h2': {
      color: '#fff',
    },
    '@media (max-width: 600px)': {
      paddingRight: 'unset',
    },
    '& h1': {
      lineHeight: '3.5rem',
      fontWeight: 300,
      fontSize: '4rem',
      marginBottom: '2rem',
      '@media (max-width: 600px)': {
        fontSize: `3.5rem`,
        textAlign: 'center',
      },
      '@media (max-width: 960px)': {
        fontSize: `2.5rem`,
        lineHeight: `2.5rem`,
      },
    },
    '& h2': {
      fontWeight: 100,
      fontSize: '2rem',
      '@media (max-width: 600px)': {
        textAlign: 'center',
      },
      '@media (max-width: 960px)': {
        fontSize: `1.4rem`,
      },
    },
  },
})

const Index = ({ classes, data }) => {
  return (
    <Grid container>
      <Grid container className={classes.diagSection}>
        <Grid item className={classes.diagOpp}>
          <Container flex>
            <Grid item xs={12} sm={6} className={classes.heroWrapper}>
              <Typography variant="display3" align="right">
                This will change everything!
              </Typography>
              <Typography variant="title" align="right">
                Welcome to a new Gatsby site.<br />
                This is something great.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.heroWrapper}>
              <Img
                sizes={data.hero1.childImageSharp.sizes}
                title="phone and pen"
                alt="some techy image"
              />
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="display2" align="center">
                Award Winning Features
              </Typography>
              <br />
              <hr />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item xs={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <MyLocationIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Advanced Targeting</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item s={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <LocationCityIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Worldwide Coverage</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item s={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <NotificationsActiveIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Instant Notifications</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item item xs={12} sm={6}>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item s={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <SmsIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Automated Chatbots</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item s={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <NetworkCheckIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Efficiency Reporting</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                className={classes.awardItems}
              >
                <Grid item s={12} sm={3} lg={2}>
                  <Icon className={classes.featureIcon}>
                    <TagFacesIcon />
                  </Icon>
                </Grid>
                <Grid item xs={12} sm={9} lg={10}>
                  <Typography variant="title">Customer Feedback</Typography>
                  <Typography variant="body1">
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container className={classes.sectionLight}>
        <Container>
          <Grid item xs={12}>
            <Typography variant="display2" align="center">
              Another section to come
            </Typography>
            <br />
            <hr />
            <Grid container justify="center">
              <Grid item xs={8}>
                <Typography variant="subheading" align="center">
                  Quickly build an effective pricing table for your potential
                  customers with this example. It's built with default
                  Matrial-UI components and utilities with little customization.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Index)

export const homeHero = graphql`
  fragment heroImage on File {
    childImageSharp {
      sizes(maxWidth: 400) {
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
