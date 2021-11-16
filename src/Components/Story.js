import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

import colors from '../Constants/Colors';

const Story = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.icon}
        source={{uri: props.profilePhotoUrl}}
        resizeMode="contain"
      />
      <Text style={styles.texts} numberOfLines={1} ellipsizeMode="tail">
        {props.username}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  texts: {color: colors.opposite},

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WP('20%'),
    marginHorizontal: 5,
  },

  icon: {height: WP('15%'), width: WP('15%'), borderRadius: 120},
});

export default Story;
