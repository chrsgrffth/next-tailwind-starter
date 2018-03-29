import * as React from 'react';
import { Author } from '../components/author';
import { DefaultLayout } from '../layouts/default';

export default class extends React.Component<{}, {}> {

  public render() {
    return (
      <DefaultLayout>
        <div className="flex items-center justify-center h-screen p-6">
          <div className="w-full max-w-lg">
            <div className="mb-4">
              <p className="text-sm text-grey-dark antialiased mb-2">Next.js + TypeScript</p>
              <a href="https://github.com/chrsgrffth/next-typescript" className="text-black hover:text-blue no-underline hover:underline">
              <h1 className="text-xl font-semibold mb-6">
                Universal TypeScript App
              </h1>
              </a>
              <p className="text-grey-darkest antialiased max-w-sm leading-normal">No one likes a yappy dog. Just like no one likes Javascript that is impossible to queit down – get that thing trained. Start writing robust and maintainable code from day one because if it's not designed to scale, it's destined to fail.</p>
            </div>

            <Author
              username="chrsgrffth"
              imgSrc="https://s.gravatar.com/avatar/a28f41d05223fa98c5a93bbdd0489379?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fch.png"
            />

          </div>
        </div>
      </DefaultLayout>
    );
  }
}
