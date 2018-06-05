import React from 'react'
import Link from 'gatsby-link'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Container from '../components/Container'

const styles = theme => ({
  sectionLight: {
    width: `100vw`,
  },
  sectionDark: {
    backgroundColor: theme.palette.grey[300],
    width: `100vw`,
  },
})

const PricingPage = ({ classes }) => (
  <Grid container>
    <Grid item className={classes.sectionLight}>
      <Container>
        <Grid item xs={12}>
          <Typography variant="display2" align="center">
            Pricing
          </Typography>
          <Typography variant="subheading" align="center">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </Typography>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionDark}>
      <Container flex>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Free Tier"
              subheader="Try us out for as long as you like"
            />
            <CardContent>
              <Typography gutterBottom variant="headline">
                $0
              </Typography>
              <Typography gutterBottom variant="subheading">
                /month
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                fullWidth
              >
                Sign up for free
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Small Business"
              subheader="Perfect for small teams of 2-5 users"
            />
            <CardContent>
              <Typography gutterBottom variant="headline">
                $19
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>20 users included</li>
                  <li>15 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
              >
                Get started
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader
              title="Corporate"
              subheader="When compliance and reporting matter"
            />
            <CardContent>
              <Typography gutterBottom variant="headline">
                $49
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>30 users included</li>
                  <li>25 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
              >
                Contact us
              </Button>
            </CardContent>
          </Card>
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
