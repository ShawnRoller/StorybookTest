import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './style';

export default function CenterView({ children, style }) {
  return (
    <View style={[styles.main, style ]} >
        {children}
    </View>
  )
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
