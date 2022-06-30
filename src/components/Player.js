import React, { PureComponent } from 'react';
import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';
import seconds2time from '../utils/seconds2time';
import { colors } from '../utils/themes';
import AudioTimeBar from './AudioTimeBar';
import { Text, Title } from './Typos';

class Player extends PureComponent {
  render() {
    const player = {
      visible: false,
      status: false,
      book: {
        id: '1',
        title: 'The Alchemist playing',
        authors: ['Paulo Coelho'],
        categories: ['Novel', 'Drama', 'Fantasy'],
        readers: ['audioaz.com'],
        description:
          'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
        rating: 3.8,
        tracks: [
          {
            title: 'The Alchemist - Introduction',
            link: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
          },
        ],
      },
      duration: null,
      track: {
        'title':'the song'
      },
    };
    // const { currentTime } = this.state;
    const book = {

        id: '1',
        title: 'The Alchemist playing',
        authors: ['Paulo Coelho'],
        categories: ['Novel', 'Drama', 'Fantasy'],
        readers: ['audioaz.com'],
        description:
          'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
        rating: 3.8,
        tracks: [
          {
            title: 'The Alchemist - Introduction',
            link: 'https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3',
          },
        ],
      duration: null,
    };
    //const timePercent = player?.duration ? currentTime / player.duration : 0;

    return (
      <Animated.View
        onLayout={event => null}
        style={[
          styles.playerContainer,
        ]}
      >
        <AudioTimeBar percent={0.2} />
        <View style={styles.nameAndControl}>
          <View style={styles.row}>
            <Animated.View style={styles.info}>
              <Title numberOfLines={1}>{book.title} </Title>
              <Text numberOfLines={1}>{player?.track?.title} </Text>
            </Animated.View>
          </View>

          <View style={styles.controls}>
            <Text>
              {seconds2time(150)}/{seconds2time(300)}
            </Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}

// const mapStateToProps = state => ({
//   player: state.player,
// });

export default Player;

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.darkOpacity,
  },
  nameAndControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  row: {

  },
  info: {
    flex: 1,
    backgroundColor: 'pink',
  },
  controls: {
    backgroundColor: 'red'
  },
  button: {},
  loading: {
  },
});
