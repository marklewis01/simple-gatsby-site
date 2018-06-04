import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Manager, Target, Popper } from 'react-popper'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'
import Icon from '@material-ui/core/Icon'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Link from 'gatsby-link'
import {
  IconGitHub,
  IconLinkedIn,
  IconLinkedInBoxed,
  IconPhone,
} from '../SocialIcons'

import './Footer.scss'

const styles = theme => ({
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
      <footer className="footer footer-fixed">
        <Grid container>
          <nav>
            <Grid item xs={12} sm={6} className="nav-socials">
              <ul>
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
                          placement="right-start"
                          modifiers={{
                            offset: { enabled: true, offset: '-5, 10' },
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
            <Grid item xs={12} sm={6}>
              <ul>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
              </ul>
            </Grid>
            <div className="rss">
              <Button>Subscribe</Button>
            </div>
          </nav>

          <Grid item xs={12} className="copyright">
            <p>
              <small>{company} &copy; 2018</small>
            </p>
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
