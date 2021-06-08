import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class WebviewProfile extends Component {
  constructor(props) {
    super();
  }

  render = () => {
    return <WebView source={{ uri: 'https://app.powerbrain.id/public/profile?firebase-email=farizazmip@gmail.com' }} />
  };
}

export default WebviewProfile;
