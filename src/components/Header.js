import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors, metrics } from '../utils/themes';
import { Title } from './Typos';

const Header = ({
  animatedY,
  animatedOpacity,
  title,
  rightButton,
  hasBackButton,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {hasBackButton ? (
        <TouchableOpacity
          style={styles.leftButton}
          onPress={() => navigation.goBack()}
        >
          <Feather
            name="arrow-left"
            size={28}
            color={colors.black}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
      <Animated.View style={[styles.center,]}>
        <Title numberOfLines={1}>{title}</Title>
      </Animated.View>
      {rightButton ? (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => rightButton.onPress()}
        >
          <Feather
            name={rightButton.iconName}
            size={26}
            color={colors.black}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffcccc',
    justifyContent:'space-between'
  },
  leftButton: {
  },
  rightButton: {
  },
  center: {
    alignItems: 'center',
    flex: 1,
  },
});
