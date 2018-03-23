import * as React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '../layouts/default'

interface Props {
  children?: React.ReactNode
}

export default class extends React.Component<{}, {}> {

  render () {
    return (
      <DefaultLayout />
    )
  }

}

// const App = () => <div>Welcome to Next.js!</div>

// export default App

// import stylesheet from '../css/main.css'

// export default class extends React.Component {
//   static async getInitialProps ({ req }) {
//     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//     return { userAgent }
//   }

//   render () {
//     return (
//       <div>
//         <Head>
//           <title>Idea</title>
//           <meta name='viewport' content='initial-scale=1.0, width=device-width' />
//         </Head>
//         <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
//         <div className='mt-8'>Hello World {this.props.userAgent}</div>
//       </div>
//     )
//   }
// }
