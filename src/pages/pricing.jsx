import React from 'react'
import Link from 'gatsby-link'

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

import Container from '../components/Container'

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 1.5,
    height: `100%`,
    display: 'flex',
    flexDirection: 'column',
  },
  cardList: {
    marginBottom: `1rem`,
    marginTop: `1rem`,
  },
  cardListItem: {
    paddingTop: 'unset',
    paddingBottom: 'unset',
  },
  cardPrice: {
    margin: `20px 0 5px`,
    fontSize: `2rem`,
    fontWeight: `bold`,
    '& span': {
      color: theme.palette.grey[400],
      fontSize: `1.5rem`,
      fontWeight: `300`,
    },
  },
  cardTitle: {
    margin: `20px 0 5px`,
  },
  cardWrapper: {
    '@media (max-width: 960px)': {
      marginBottom: `2rem`,
    },
  },
  sectionLight: {},
  sectionDark: {
    backgroundColor: theme.palette.grey[300],
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
})

const PricingPage = ({ classes }) => (
  <Grid container>
    <Grid container className={classes.sectionLight}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="display2" align="center">
            Pricing
          </Typography>
          <br />
          <hr />
          <Grid container justify="center">
            <Grid item xs={8}>
              <Typography variant="caption" align="center">
                Inspired by{' '}
                <a
                  href="http://getbootstrap.com/docs/4.0/examples/pricing/"
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
      <Container flex>
        <Grid item xs={12} md={4} className={classes.cardWrapper}>
          <Paper className={classes.card}>
            <Grid item>
              <Typography
                variant="headline"
                align="center"
                className={classes.cardTitle}
              >
                Free Tier
              </Typography>
              <Typography variant="caption" align="center">
                Try us out for as long as you like
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="headline"
                align="center"
                className={classes.cardPrice}
              >
                $0 <span>/month</span>
              </Typography>
              <List className={classes.cardList}>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="10 users included" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="2 GB of storage" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Email support" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help center access" />
                </ListItem>
              </List>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Button variant="outlined" color="primary" fullWidth>
                  Sign up for free
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardWrapper}>
          <Paper className={classes.card}>
            <Grid item>
              <Typography
                variant="headline"
                align="center"
                className={classes.cardTitle}
              >
                Small Business
              </Typography>
              <Typography variant="caption" align="center">
                Perfect for small teams of 2-5 users
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="headline"
                align="center"
                className={classes.cardPrice}
              >
                $19 <span>/month</span>
              </Typography>
              <List className={classes.cardList}>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="20 users included" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="15 GB of storage" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Priority email support" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help center access" />
                </ListItem>
              </List>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Button variant="contained" color="primary" fullWidth>
                  Get started
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} className={classes.cardWrapper}>
          <Paper className={classes.card}>
            <Grid item>
              <Typography
                variant="headline"
                align="center"
                className={classes.cardTitle}
              >
                Corporate
              </Typography>
              <Typography variant="caption" align="center">
                When compliance and reporting matter
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="headline"
                align="center"
                className={classes.cardPrice}
              >
                $49 <span>/month</span>
              </Typography>
              <List className={classes.cardList}>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="30 users included" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="25 GB of storage" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Phone and email support" />
                </ListItem>
                <ListItem className={classes.cardListItem}>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help center access" />
                </ListItem>
              </List>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Button variant="contained" color="primary" fullWidth>
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionLight}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="display1">Hi from the Pricing page</Typography>
          <br />
          <hr />
          <Typography variant="body1">
            <Link to="/">Go back to the homepage</Link>
          </Typography>
        </Grid>
      </Container>
    </Grid>
  </Grid>
)

export default withStyles(styles)(PricingPage)
