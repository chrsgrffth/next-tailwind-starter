import Head from 'next/head'
import React from 'react'
import stylesheet from '../css/main.css'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render () {
    return (
      <div>
        <Head>
          <title>Idea</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='mt-8'>Hello World {this.props.userAgent}</div>
      </div>
    )
  }
}
