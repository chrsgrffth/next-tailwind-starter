import * as React from 'react'
import Head from 'next/head'

import { DefaultLayout } from '../layouts/default'
import { Author } from '../components/author'

interface Props {
  children?: React.ReactNode
}

export default class extends React.Component<{}, {}> {

  render () {
    return (
      <DefaultLayout>
        <div className='flex items-center justify-center h-screen p-6'>
          <div className='w-full max-w-lg'>
            <div className='mb-4'>
              <p className='text-sm text-grey-dark antialiased mb-2'>Next.js + TypeScript</p>
              <h1 className='text-lg font-semibold'>
                Universal TypeScript App
              </h1>
            </div>

            <ul className='mb-6'>
              <li>React</li>
              <li>Next.js</li>
              <li>PostCSS</li>
              <li>Standard JS Lint</li>
              <li>TSLint w/ Standard JS Config</li>
              <li>Tailwind CSS</li>
            </ul>

            <Author
              username='chrsgrffth'
              imgSrc='https://s.gravatar.com/avatar/a28f41d05223fa98c5a93bbdd0489379?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fch.png'
            />

          </div>
        </div>
      </DefaultLayout>
    )
  }

}