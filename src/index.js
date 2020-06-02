/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import CodePush from 'react-native-code-push';

import './config/ReactotronConfig';

import { store, persistor } from '~/store';
import Routes from './routes';

class Index extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('65783e62-2cb4-407e-9992-d1a3e39551fc');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (data) => {};

  onOpened = (notification) => {};

  onIds = (id) => {};

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
})(Index);
