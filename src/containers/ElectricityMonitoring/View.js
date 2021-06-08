import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebviewElectricityMonitoring extends Component {
  constructor(props) {
    super();
  }

  render = () => {
    return <WebView source={{ uri: 'https://app.powerbrain.id/public/electricity-monitoring?home-id=farizazmipgmailcom' }} />
  };
}

export default WebviewElectricityMonitoring;
