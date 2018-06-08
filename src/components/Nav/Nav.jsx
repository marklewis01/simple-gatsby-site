import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {},
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
  hideNav: {
    top: -70,
    transition: `top 0.3s`,
  },
  showNav: {
    top: 0,
    transition: `top 0.3s`,
  },
})

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleNav)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleNav)
  }

  handleNav = e => {
    let { showNav } = this.state

    window.scrollY > this.prev
      ? this.setState({ showNav: false })
      : this.setState({ showNav: true })

    this.prev = window.scrollY
  }

  render() {
    const { classes, company } = this.props
    const { showNav } = this.state
    return (
      <AppBar
        position="fixed"
        color="default"
        className={showNav ? classes.showNav : classes.hideNav}
      >
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/">{company}</Link>
          </Typography>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div>
              <Link to="/features">
                <Button className={classes.navItem}>Features</Button>
              </Link>
              <Link to="/pricing">
                <Button className={classes.navItem}>Pricing</Button>
              </Link>
              <Link to="/blog">
                <Button className={classes.navItem}>Articles</Button>
              </Link>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
              >
                Login
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Nav)
