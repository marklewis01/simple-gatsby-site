import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import Footer from '../components/Footer'
import Nav from '../components/Nav'

import 'typeface-roboto'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Some Site"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <CssBaseline />
    <div className="wrapper">
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div className="main">{children()}</div>
      <Footer company={data.site.siteMetadata.company} />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        company
      }
    }
  }
`
