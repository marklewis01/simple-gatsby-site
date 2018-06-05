import React from 'react'
import Link from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    padding: '2.5rem 0 2rem',
    backgroundColor: theme.palette.primary.light,
  },
})

const SecondPage = () => (
  <Grid>
    <Typography variant="display1">Hi from the second page</Typography>
    <Typography variant="body1">
      Welcome to page 2
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Typography>
  </Grid>
)

export default withStyles(styles)(SecondPage)
