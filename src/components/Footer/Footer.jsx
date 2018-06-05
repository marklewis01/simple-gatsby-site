import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Manager, Target, Popper } from 'react-popper'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Link from 'gatsby-link'
import {
  IconGitHub,
  IconLinkedIn,
  IconLinkedInBoxed,
  IconPhone,
} from '../SocialIcons'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: `1rem auto`,
    maxWidth: `60rem`,
    padding: `0 1rem 1.5rem`,
  },
  footer: {
    backgroundColor: theme.palette.primary.light,
    '& ul': {
      marginLeft: 0,
    },
  },
  nav: {
    display: `flex`,
    margin: `1em auto 0`,
    maxWidth: '30rem',
  },
  newsletterButton: {
    paddingLeft: 0,
  },
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
  popperOpen: {
    zIndex: '10',
  },
  socialLinks: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    '& li': {
      padding: '0 20px',
    },
  },
})

class Footer extends Component {
  state = {
    popperGitHub: false,
    popperLinkedIn: false,
    popperPhone: false,
  }

  handlePopperOpen = obj => {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        [obj.value]: true,
      }
    })
  }

  handlePopperClose = obj => {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        [obj.value]: false,
      }
    })
  }

  handleEventsEnabled = obj => {
    return this.state.obj
  }

  render() {
    const { classes, company } = this.props
    const { popperGitHub, popperLinkedIn, popperPhone } = this.state

    const icons = {
      github: {
        C: <IconGitHub />,
        describedby: 'react-popper-tooltip',
        id: 'popperGitHub',
        url: `https://github.com/marklewis01`,
        text: 'Check out my GitHub repos',
        stateRef: 'popperGitHub',
      },

      linkedin: {
        C: <IconLinkedIn />,
        describedby: 'react-popper-tooltip',
        id: 'popperLinkedIn',
        url: `https://www.linkedin.com/in/marklewis01/`,
        text: 'Connect with me on LinkedIn',
        stateRef: 'popperLinkedIn',
      },

      phone: {
        C: <IconPhone />,
        describedby: 'react-popper-tooltip',
        id: 'popperPhone',
        url: 'tel://+61417446739',
        text: "Call me and let's talk!",
        stateRef: 'popperPhone',
      },
    }

    return (
      <footer className={classes.footer}>
        <Grid container justify="space-between" className={classes.root}>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <Typography variant="body2">Article One</Typography>
              </li>
              <li>
                <Typography variant="body2">Article Two</Typography>
              </li>
              <li>
                <Typography variant="body2">Article Three</Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul>
              <li>
                <Typography variant="body2">Article One</Typography>
              </li>
              <li>
                <Typography variant="body2">Article Two</Typography>
              </li>
              <li>
                <Typography variant="body2">Article Three</Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="title">Newsletter</Typography>
            <Typography variant="body1">
              Receive our monthly newsletter.
            </Typography>
            <form>
              <TextField
                id="full-width"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Your email address"
                autoComplete="email"
                fullWidth
                margin="normal"
              />
            </form>
            <Button className={classes.newsletterButton}>Subscribe</Button>
          </Grid>
        </Grid>
        <Grid container className="container" justify="center">
          <Grid item>
            <ul className={classes.socialLinks}>
              {Object.keys(icons).map(icon => {
                const { stateRef } = icons[icon]
                const open = this.state[stateRef]

                return (
                  <li key={icons[icon].id}>
                    <Manager>
                      <Target>
                        <Link to={icons[icon].url}>
                          <Icon
                            aria-describedby={icons[icon].describedby}
                            onMouseOver={() =>
                              this.handlePopperOpen({ value: icons[icon].id })
                            }
                            onMouseOut={() =>
                              this.handlePopperClose({
                                value: icons[icon].id,
                              })
                            }
                          >
                            {icons[icon].C}
                          </Icon>
                        </Link>
                      </Target>
                      <Popper
                        placement="top"
                        modifiers={{
                          offset: { enabled: true, offset: '0, 15' },
                        }}
                        eventsEnabled={open}
                        className={
                          !open ? classes.popperClose : classes.popperOpen
                        }
                      >
                        <Grow in={open} style={{ transformOrigin: '0 0 0' }}>
                          <Paper
                            id="react-popper-tooltip"
                            className={classes.paper}
                            role="tooltip"
                            aria-hidden={!this.state[icon]}
                            elevation={8}
                          >
                            <Typography>{icons[icon].text}</Typography>
                          </Paper>
                        </Grow>
                      </Popper>
                    </Manager>
                  </li>
                )
              })}
            </ul>
          </Grid>
        </Grid>
        <Grid container justify="center" className="container">
          <Grid item className="copyright">
            <Typography variant="caption">{company} &copy; 2018</Typography>
          </Grid>
        </Grid>
      </footer>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
