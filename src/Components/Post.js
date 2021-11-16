import React from 'react';
import {
  Appearance,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../Constants/Colors';

const Post = props => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Image
          style={styles.icon}
          source={{uri: props.profilePhotoUrl}}
          resizeMode="contain"
        />

        <Text style={[styles.texts, styles.title]}>{props.username}</Text>
      </View>

      <Image style={styles.image} source={{uri: props.imageUrl}} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={props.onLike}>
          <Ionicons
            name={props.liked == true ? 'heart' : 'heart-outline'}
            size={45}
            color="red"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onSave}>
          <Ionicons
            name={props.saved == true ? 'bookmark' : 'bookmark-outline'}
            size={45}
            color={colors.colorScheme == 'light' ? 'black' : 'white'}
          />
        </TouchableOpacity>
      </View>

      <Text style={[styles.texts, styles.description]}>
        {props.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {color: colors.opposite},

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  icon: {marginLeft: 5, height: 35, width: 35, borderRadius: 120},
  title: {marginLeft: 5, fontSize: 18},

  image: {height: 300},

  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-between'},

  description: {
    height: 65,
    textAlignVertical: 'center',
    fontSize: 18,
    paddingLeft: 5,
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1,
  },
});

export default Post;
