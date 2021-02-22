import React from 'react';
import app from 'next/app';
import { Provider } from 'mobx-react';
import initializeStore, { RootStore } from '../stores';

class CustomApp extends app {
  store: RootStore;

  static async getInitialProps(context: any) {
    const mobxStore = initializeStore();
    context.ctx.store = mobxStore;
    const appProps = await app.getInitialProps(context);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props: any) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default CustomApp;
