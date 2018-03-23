import * as React from 'react'
import Head from 'next/head'
import * as stylesheet from '../../css/main.css'

interface Props {
  children?: React.ReactNode
}

export class DefaultLayout extends React.Component<{}, {}> {

  render () {
    return (
      <div>
        <Head>
          <title>Idea</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style>{stylesheet}</style>
        <div className='pt-5'>Test</div>
      </div>
    )
  }

}
