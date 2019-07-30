import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export default function TransparentCard({ style, children }) {
  return (
    <View style={[ styles.containerStyle, style ]}>
      {children}
    </View>
  );
}

TransparentCard.defaultProps = {
  children: null,
  style: {}
};

TransparentCard.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
