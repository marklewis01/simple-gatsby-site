import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: 10,
    '&:hover': {
      boxShadow: theme.shadows[2],
    },
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navItem: {
    '& span': {
      paddingBottom: 4,
      paddingTop: 4,
      '&:hover': {
        borderBottom: '1px solid',
        paddingBottom: 3,
      },
    },
  },
})

function ButtonAppBar(props) {
  const { classes, company } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/">{company}</Link>
          </Typography>
          <Button className={classes.navItem}>Features</Button>
          <Button className={classes.navItem}>Support</Button>
          <Button className={classes.navItem}>Pricing</Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
