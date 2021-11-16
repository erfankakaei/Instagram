import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Post from '../Components/Post';
import Story from '../Components/Story';

import colors from '../Constants/Colors';

import {add, like, save} from '../Store/actions/actions';

const Feed = () => {
  const postsArray = useSelector(state => state.postsArray);
  let tempPostsArray = postsArray;
  const dispatch = useDispatch();

  useEffect(async () => {
    if (tempPostsArray != []) {
      for (let i = 0; i < 10; i++) {
        const id = i;

        const username = await axios
          .get(
            'https://jsonplaceholder.typicode.com/users/' +
              Math.floor(Math.random() * 9).toString(),
          )
          .then(response => response.data.username)
          .catch(error => console.log(error));

        const profilePhotoUrl = `https://picsum.photos/id/${Math.floor(
          Math.random() * 1000,
        )}/50`;

        const imageUrl = `https://picsum.photos/id/${Math.floor(
          Math.random() * 1000,
        )}/300/180`;

        const description = await axios
          .get(
            'https://jsonplaceholder.typicode.com/comments/' +
              Math.floor(Math.random() * 499).toString(),
          )
          .then(response => response.data.body);

        dispatch(
          add(
            (payload = {
              id: id,
              username: username,
              profilePhotoUrl: profilePhotoUrl,
              imageUrl: imageUrl,
              description: description,
              liked: false,
              saved: false,
            }),
          ),
        );
      }
    }
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.topBar}>
        <Text style={[styles.texts, styles.topText]}>Instagram</Text>
      </View>

      <View style={styles.scrollViewsContainer}>
        <View style={styles.storiesContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tempPostsArray}
            renderItem={item => (
              <Story
                username={item.item.username}
                profilePhotoUrl={item.item.profilePhotoUrl}
              />
            )}
          />
        </View>

        <View style={styles.postsContainer}>
          <FlatList
            data={tempPostsArray}
            renderItem={item => (
              <Post
                username={item.item.username}
                profilePhotoUrl={item.item.profilePhotoUrl}
                imageUrl={item.item.imageUrl}
                description={item.item.description}
                liked={item.item.liked}
                saved={item.item.saved}
                onLike={() => {
                  console.log(tempPostsArray[item.item.id].id);
                  tempPostsArray[item.item.id].liked =
                    !tempPostsArray[item.item.id].liked;
                  dispatch(add(tempPostsArray));
                }}
                onSave={() => dispatch(save(item.item.id))}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  texts: {color: colors.opposite},

  appContainer: {flex: 1, backgroundColor: colors.primary},

  topBar: {flex: 1, justifyContent: 'center'},

  topText: {
    paddingLeft: 5,
    fontSize: 24,
    textAlignVertical: 'center',
  },

  scrollViewsContainer: {flex: 13},

  storiesContainer: {
    flex: 1,
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1,
  },

  postsContainer: {
    flex: 7,
  },
});

export default Feed;
