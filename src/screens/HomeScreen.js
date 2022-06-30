import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import AnimatedFlatList from '../components/AnimatedFlatList';
import CardBook from '../components/CardBook';
import { colors, metrics } from '../utils/themes';
import { useSelector } from 'react-redux';
import BOOKS_DATA from '../sampledata/books';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../store/ActionTypes';
import HomeTitleBar from '../components/HomeTitleBar';
import CategorySelector from '../components/CategorySelector';

const LOGO_SIZE = 24;
const HEADER_OFFSET = metrics.screenWidth / 2 - 40;
const PAGE_SIZE = 10;

// class HomeScreen extends Component {
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      {
        type: actionTypes.LOAD_RECENT_BOOKS,
        payload: BOOKS_DATA,
      }
    );
  }, []);


  // before this load the books object into the redux state
  const books = useSelector(state => state.br.books);


  return (
    <View style={styles.container}>
      <HomeTitleBar cartOnPress={() => navigation.navigate('My Cart')} />
      <CategorySelector/>
      <AnimatedFlatList
        data={books}
        // keyExtractor={(item, index) => index.toString()}
        // ListHeaderComponent={<><View style={styles.headerComponent} /><View><Text>Hye threr</Text></View></>}
        renderItem={({ item, index }) => (
          <CardBook
            item={item}
            index={index % PAGE_SIZE}
            onPress={() =>
              navigation.navigate('Book Screen', {
                id: item.id,
                item: item,
              })}
          />
        )}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    marginTop: 12
  },
  headerTitle: {
    position: 'absolute',
    bottom: 0,
    width: metrics.screenWidth,
    padding: metrics.lessPadding,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    position: 'absolute',
    bottom: 0,
    width: metrics.screenWidth,
    paddingHorizontal: metrics.extraPadding,
    paddingVertical: metrics.lessPadding,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    marginHorizontal: metrics.lessPadding,
  },
  textWhite: {
    color: colors.white,
  },
  list: {
    flex: 1,
  },
  headerComponent: {
    height: metrics.headerHeightX2,
  },
});
