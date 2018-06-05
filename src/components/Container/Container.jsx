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
      maxWidth: `60rem`,
      padding: `0 1rem 1.5rem`,
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
      flex,
      ...other
    } = this.props

    const className = classNames(
      classes.root,
      {
        [classes.flex]: flex,
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
  flex: PropTypes.bool,
}

Container.defaultProps = {
  flex: false,
}

export default withStyles(styles)(Container)
