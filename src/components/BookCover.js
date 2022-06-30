import React from 'react';
import { Image,  StyleSheet, View } from 'react-native';
import {  metrics } from '../utils/themes';

const BookCover = (props) => {
  const { imageSource } = props;
  const { imageSize } = props;
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={{
        ...styles.coverImage,
        width: imageSize == 'small' ? metrics.coverWidthSmall : metrics.coverWidth,
        height: imageSize == 'small' ? metrics.coverHeightSmall : metrics.coverHeight,
      }} />
    </View>
  );
}

export default BookCover;

const styles = StyleSheet.create({
  container: {
  },
  coverImage: {
    width: metrics.coverWidth,
    height: metrics.coverHeight,
    resizeMode: 'stretch',
  },
});
