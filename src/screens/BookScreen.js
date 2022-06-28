import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BookCover from '../components/BookCover';
// import ButtonNewReview from '../components/ButtonNewReview';
// import ButtonPlay from '../components/ButtonPlay';
import Category from '../components/Category';
import FooterSpace from '../components/FooterSpace';
// import Header from '../components/Header';
// import Reviews from '../components/Reviews';
import SectionHeader from '../components/SectionHeader';
import StarRating from '../components/StarRating';
import { SubText, Text, TextButton, Title } from '../components/Typos';
// import PlayerControl from '../helpers/PlayerControl';
// import PLAYER_STATUS from '../utils/playerStatus';
import { colors, metrics } from '../utils/themes';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/ActionTypes';

const BookScreen = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch()

  const addToCartHandler = (item) => {
    // console.log('item:', item)
    // add this product in redux cart variable
    dispatch(
      {
        type: actionTypes.ADD_ITEM_TO_CART,
        payload: item,
      }
    );

  }

  // getting book data from props, when ever we navigate using react
  // native routing to a page it carries info in props route paramerters
  const { route } = props;
  const item = route.params.item;

  // const isPlaying =
  //   player.status === PLAYER_STATUS.PLAYING && player.book.id === item.id;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.list}
      >
        <View style={styles.paddingLeft}>
          <BookCover imageSource={item.image} />
          <Title numberOfLines={3} style={styles.title}>{item.title}</Title>
          <Text>{item.authors.join(' ,')}</Text>
          <Category data={item.categories} />
          <View style={styles.line} />
          <Text>Readers: {item.readers.join(' ,')}</Text>
          <StarRating rating={item.rating} />
          <View><Text>Buy paperback for Rs.{item.price}</Text></View>
        </View>
        <SectionHeader title="Summary" />
        {collapsed ? (
          <View>
            <Text numberOfLines={3}>{item.description}</Text>
            <TextButton
              style={styles.readmoreText}
              onPress={() => setCollapsed(false)}
            >
              Read more
            </TextButton>
          </View>
        ) : (
          <View>
            <Text>{item.description}</Text>
            <TextButton
              style={styles.readmoreText}
              onPress={() => setCollapsed(true)}
            >
              Read Less
            </TextButton>
          </View>
        )}
        <View
          style={{
            alignItems: 'center'
          }}>
          <TouchableOpacity
            onPress={() => addToCartHandler(item)}
            style={styles.addToCartButton}
          >
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <FooterSpace />
      </Animated.ScrollView>
    </View>
  );

}

export default BookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    alignItems: 'center'
  },
  list: {
    padding: metrics.lessPadding,
  },
  paddingLeft: {
    alignItems: 'center'
  },
  chapter: {
    paddingTop: metrics.lessPadding,
    flexDirection: 'row',
  },
  chapterIcon: {
    marginHorizontal: metrics.lessPadding,
  },
  readmoreText: {
    fontSize: 14,
  },
  addToCartButton: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: colors.primaryLight,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
});
