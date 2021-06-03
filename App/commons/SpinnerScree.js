import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Spinner } from 'native-base';
import { height, width } from '../utils/dimensions';
import { bluetikets } from '../utils/colors';
import PropTypes from 'prop-types';

const SpeanerLoading = ({ loading }) => (
  <>
    {loading && (
      <View style={[styles.sub, { backgroundColor: bluetikets }]}>
        <Spinner color={'blue'} size={'large'} />
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
    width,
    height,

    // backgroundColor: 'rgba(255, 255, 255,0.3)',
  },
});

export default SpeanerLoading;
