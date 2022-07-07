import React, { useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, metrics } from '../utils/themes';
import Category from './Category';
import { Text, Title } from './Typos';
import StartRating from './StarRating';
import BookCover from './BookCover'

const CardBook = (props) => {
  const [visibility, setVisibility] = useState(1)
  const { item, onPress } = props;
  return (
    <TouchableOpacity
      onPress={()=>onPress()}
      activeOpacity={1}
    >
      <Animated.View
        style={{
          ...styles.container,
          opacity: visibility,
        }}
      >
        <BookCover imageSource={item.image} imageSize={'default'} />
        <View style={styles.card}>
          <Title numberOfLines={1}>{item.title}</Title>
          <Text>{item.authors}</Text>
          <Category data={item.categories} />
          <View style={styles.line} />
          <Text>{item.authors}</Text>
          <View style={styles.cardHeader}>
            <StartRating rating={item.rating} />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );

}

export default CardBook;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:20,
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    width:'100%',
  },
  cardHeader: {
  },
  card: {
    paddingLeft:15
  },
  line: {
    height: 2,
    width: metrics.extraPadding,
    backgroundColor: colors.textSecondary,
    marginBottom: metrics.padding / 2,
  },
});
