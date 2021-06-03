import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import EventScreen from './EventScreen';
import RegisteredUserScreen from './RegisteredUserScreen';
import Taps from '../commons/Taps';

const screensTaps = () => {
  return [
    {
      heading: 'Event',
      component: <EventScreen />,
    },
    {
      heading: 'Registered Users',
      component: <RegisteredUserScreen />,
    },
  ];
};

const EventMain = () => {
  return (
    <View style={styles.content}>
      <Taps data={screensTaps()} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
export default EventMain;
