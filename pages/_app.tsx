import React from 'react';
import app, { AppContext, AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import { NextPageContext, NextComponentType } from 'next';
import initializeStore, { RootStore } from '../stores';

export type MyPageContext = NextPageContext & {
  store?: RootStore;
};

type MyAppContext = Omit<AppContext, 'Component' | 'ctx'> & {
  Component: NextComponentType;
  ctx: MyPageContext;
};

type MyAppProps = AppProps & {
  initialMobxState: RootStore;
};

class CustomApp extends app {
  store: RootStore;

  static async getInitialProps(context: MyAppContext) {
    const mobxStore = initializeStore();
    context.ctx.store = mobxStore;
    const appProps = await app.getInitialProps(context);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props: MyAppProps) {
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
