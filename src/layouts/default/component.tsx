import Head from 'next/head';
import * as React from 'react';
import * as stylesheet from '../../css/main.css';

interface Props {
  children?: React.ReactNode;
}

export class DefaultLayout extends React.Component<Props, {}> {

  public render() {
    return (
      <div>
        <Head>
          <title>Next.js + TypeScript</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style>{stylesheet}</style>
        {this.props.children}
      </div>
    );
  }

}
