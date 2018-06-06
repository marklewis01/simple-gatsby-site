import React from 'react'

import Container from '../components/Container'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const NotFoundPage = () => (
  <Grid container>
    <Grid item xs={12}>
      <Container flex>
        <Grid item xs={8}>
          <Typography variant="display1">NOT FOUND</Typography>
          <Typography variant="body1">
            You just hit a route that doesn&#39;t exist... the sadness.
          </Typography>
        </Grid>
      </Container>
    </Grid>
  </Grid>
)

export default NotFoundPage
