import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { colors, metrics } from '../utils/themes';

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
    // position: 'absolute',
    // left: 0,
    // top: 20,
    // backgroundColor: colors.white,
  },
  coverImage: {
    width: metrics.coverWidth,
    height: metrics.coverHeight,
    resizeMode: 'stretch',
  },
});
