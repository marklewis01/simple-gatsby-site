import React from 'react'
import Link from 'gatsby-link'

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
          <Typography variant="display1">Hi from the Pricing page</Typography>
          <br />
          <hr />
          <Typography variant="body1">
            <Link to="/">Go back to the homepage</Link>
          </Typography>
        </Grid>
      </Container>
    </Grid>
    <Grid container className={classes.sectionDark}>
      <Container>
        <Grid item xs={12} className={classes.sectionDark}>
          <Typography variant="display1">Hi from the Pricing page</Typography>
          <br />
          <hr />
          <Typography variant="body1">
            <Link to="/">Go back to the homepage</Link>
          </Typography>
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
