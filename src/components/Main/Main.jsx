import React from 'react'

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
  <div className={classes.root}>{children}</div>
)

export default withStyles(styles)(Main)
