import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Footer from '../components/Footer'
import Main from '../components/Main'
import Nav from '../components/Nav'

import 'typeface-roboto'
import './theme.scss'

const Layout = ({ children, data }) => {
  return (
    <div>
      <CssBaseline />
      <Helmet
        title={data.site.siteMetadata.company}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="wrapper">
        <Nav company={data.site.siteMetadata.company} />
        <Main>{children()}</Main>
        <Footer
          company={data.site.siteMetadata.company}
          blogPosts={data.footerPosts.edges}
        />
      </div>
    </div>
  )
}

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
    allFile (
      filter: {relativePath: {regex: "/pages/((?!page).)*\\.js$/" } }
    ) {
      edges {
        node {
          relativePath
          name
          base
          id
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
    footerPosts: allMarkdownRemark (
      limit: 4
      filter: { frontmatter: {published:{ eq: true} } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {      
        node {
          frontmatter { 
            title
            path
            published
            date
          }
        }
      }
    }
  }
`
