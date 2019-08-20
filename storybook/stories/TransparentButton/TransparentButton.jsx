import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import TransparentCard from '../TransparentCard/TransparentCard';

export default function TransparentButton({ style, children, onPress }) {
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <TransparentCard style={style}>
        {children}
      </TransparentCard>
    </TouchableOpacity>
  );
}

TransparentButton.defaultProps = {
  children: null,
  style: {},
  onPress: () => {}
};

TransparentButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
})
