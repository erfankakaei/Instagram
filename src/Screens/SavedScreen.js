import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Post from '../Components/Post';
import colors from '../Constants/Colors';
import {like, save} from '../Store/actions/actions';

const Saved = () => {
  const postsArray = useSelector(state => state.postsArray);
  const dispatch = useDispatch();

  return (
    <View style={styles.appContainer}>
      <FlatList
        data={postsArray}
        renderItem={item => {
          if (item.item.saved == true) {
            <Post
              username={item.item.username}
              profilePhotoUrl={item.item.profilePhotoUrl}
              imageUrl={item.item.imageUrl}
              description={item.item.description}
              liked={item.item.liked}
              saved={item.item.saved}
              onLike={() => dispatch(like(item.item.id))}
              onSave={() => dispatch(save(item.item.id))}
            />;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

export default Saved;
