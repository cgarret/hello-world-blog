import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../all.scss'
import Header from '../header'
import Footer from '../footer'




class Layout extends React.Component{
  constructor(){
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false
    }
  };

  render(){
    return(
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data =>{
      const { children } = this.props;
      
      return (      
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          bodyAttributes={{ class: 'has-navbar-fixed-top' }}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="site-content">{children}</div>
        <Footer />
      </>
    )}}
  />
)
        }}

        Layout.propTypes = {
          children: PropTypes.node.isRequired,
        }

export default Layout
