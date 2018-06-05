import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `1rem auto`,
    maxWidth: `60rem`,
    padding: `0 1rem 1.5rem`,
  },
})

const Main = ({ children, classes }) => (
  <Grid container className={classes.root}>
    {children}
  </Grid>
)

export default withStyles(styles)(Main)
