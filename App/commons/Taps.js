import React, { createElement } from 'react';
import { StyleSheet } from 'react-native';
import { Tab, Tabs } from 'native-base';
import PropTypes from 'prop-types';

const customTab = (heading, children, key) =>
  createElement(
    Tab,
    Object.assign(
      {},
      {
        key,
        heading,
        children,
        tabStyle: { backgroundColor: '#FFF' },
        textStyle: { color: '#000' },
        activeTabStyle: { backgroundColor: '#FFF' },
        activeTextStyle: { color: '#000' },
      },
    ),
  );

const TabsCommons = ({ data }) => {
  const tabs = data.map((item, key) =>
    customTab(item.heading, item.component, key),
  );

  return (
    <Tabs
      tabContainerStyle={{ marginTop: 0 }}
      tabBarUnderlineStyle={{ backgroundColor: '#feb24c' }}
    >
      {tabs}
    </Tabs>
  );
};

TabsCommons.defaultProps = {
  data: [],
};

TabsCommons.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TabsCommons;
