import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesList, ArticlesSingle, WebView } from '../containers';
import WebviewProfile from '../containers/Profile/View';
import WebviewElectricityMonitoring from '../containers/ElectricityMonitoring/View';

import AboutComponent from '../components/About';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title=""
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={WebviewElectricityMonitoring} />
        </Stack>
        <Stack
          key="articlesList"
          title=""
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={WebviewProfile} />
          {/* <Scene key="articlesSingle" component={ArticlesSingle} back /> */}
        </Stack>
        <Stack
          key="webView"
          title="Web View"
          icon={() => <Icon name="stats-chart" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="webView" component={WebView} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
