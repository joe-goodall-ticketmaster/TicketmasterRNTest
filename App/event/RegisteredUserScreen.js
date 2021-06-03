import React from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const RegisteredUserScreen = () => {
  return (
    <View style={styles.content}>
      <Text>RegisteredUser Screen</Text>
    </View>
  );
};
export default RegisteredUserScreen;

const styles = StyleSheet.create({
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
