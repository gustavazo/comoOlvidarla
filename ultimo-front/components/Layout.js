import PropTypes from 'prop-types'
import NextHead from 'next/head'

import Header from '../components/Header2';

import { AmpIncludeAmpInstallServiceworker } from './amp/AmpCustomElement'

// Your app's theme color
const THEME_COLOR = '#005af0'

/**
 * A sample page layout installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
const Layout = (props) => (
  <>
    <NextHead>
      <title>{props.title || 'HOLA'}</title>
      <meta name="description" content={props.description || ''} />
      <meta name="theme-color" content={THEME_COLOR} />
      <link rel="icon" sizes="192x192" href="/images/icons-192.png" />
      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/webflow.css" />
      <link rel="stylesheet" href="/css/saint-patrick.webflow.css" />

      <link rel="apple-touch-icon" href="/images/icons-192.png" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </NextHead>
    <Header/>
    {props.children}



    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker
      src="/serviceworker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay"
    />

  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5da0657b754316944047c5a6" type="text/javascript" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="/js/webflow.js" type="text/javascript"></script>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
