import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import PropTypes from 'prop-types';
import { bluetikets } from '../utils/colors';

const SpeanerLoading = ({ loading }) => (
  <>
    {loading && (
      <View style={styles.sub}>
        <Spinner color={bluetikets} size={'large'} />
      </View>
    )}
  </>
);

SpeanerLoading.defaultProps = {
  loading: false,
};

SpeanerLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  sub: {
    zIndex: 3,
    position: 'absolute',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default SpeanerLoading;
