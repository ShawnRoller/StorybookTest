import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DIAMETER = 88;
const DEFAULT_FONT_SIZE = 64;

const StepNumber = (props) => {
  return (
    <View style={[props.style, styles.containerStyle]}>
      <View style={[
        styles.circleStyle, 
        {height: props.diameter || DIAMETER}, 
        {width: props.diameter || DIAMETER}, 
        {borderRadius: (props.diameter || DIAMETER) / 2},
        {backgroundColor: this._getNumberColor(props.children)}
      ]}>
        <Text style={[styles.textStyle, {fontSize:props.style.fontSize || DEFAULT_FONT_SIZE}]}>
          {props.children}
        </Text>
      </View>
    </View>
  );
}

_getNumberColor = (stepNumber) => {
  var color = '#000000';
  switch (stepNumber) {
    case 1:
      color = '#455DE8';
      break;
    case 2:
      color = '#FD3B3E';
      break;
    case 3:
      color = '#1DD892';
      break;
    case 4:
      color = '#5AC8FA';
      break;
  }
  return color;
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
  },
  circleStyle: {
    borderColor: '#CCCCCC',
    borderWidth: 3.6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
});

export { StepNumber };
