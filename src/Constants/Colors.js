import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
let primary, secondary, tertiary, opposite;

if (colorScheme == 'light') {
  primary = '#ffffff';
  secondary = '#f9f9f9';
  tertiary = '#c6c6c6';
  opposite = '#000000';
} else {
  primary = '#000000';
  secondary = '#212121';
  tertiary = '#484848';
  opposite = '#ffffff';
}

const colors = {
  colorScheme,
  primary,
  secondary,
  tertiary,
  opposite,
  enabledButton: '#2196f3',
  disabledButtons: '#80d6ff',
};

export default colors;
