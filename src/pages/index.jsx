import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

const Index = ({ classes, data }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container flex>
          <Grid item xs={8}>
            <Typography variant="display1">Hi people</Typography>
            <Typography variant="body1">
              Welcome to your new Gatsby site. Now go build something great.
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Index)