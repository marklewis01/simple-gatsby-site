import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

export const styles = theme => {
  return {
    root: {
      display: 'block',
      margin: `1rem auto`,
      maxWidth: `66rem`,
      padding: `0 1rem 1.5rem`,
    },
    center: {
      justifyContent: 'center',
    },
    flex: {
      display: 'flex',
    },
  }
}

class Container extends React.Component {
  render() {
    const {
      children,
      classes,
      className: classNameProp,
      center,
      flex,
      ...other
    } = this.props

    const className = classNames(
      classes.root,
      {
        [classes.flex]: flex,
        [classes.center]: center,
      },
      classNameProp
    )

    return (
      <Grid container className={className} {...other}>
        {children}
      </Grid>
    )
  }
}

Container.propTypes = {
  center: PropTypes.bool,
  flex: PropTypes.bool,
}

Container.defaultProps = {
  center: false,
  flex: false,
}

export default withStyles(styles)(Container)
