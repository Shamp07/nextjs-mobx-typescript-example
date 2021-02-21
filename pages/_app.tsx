import React from 'react';
import app from 'next/app';
import { Provider } from 'mobx-react';
import RootStore from '../stores';

class CustomApp extends app {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...RootStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default CustomApp;
