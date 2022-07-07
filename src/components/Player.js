import React, { useState, useEffect } from 'react';
import {
    Animated,
    StyleSheet,
    View,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import seconds2time from '../utils/seconds2time';
import { colors } from '../utils/themes';
import AudioTimeBar from './AudioTimeBar';
import { Text, Title } from './Typos';
import PLAYER_STATUS from '../utils/playerStatus';
import { useSelector } from 'react-redux';


const Player = ({ playPause, getCurrentTime }) => {
    let [currentTime, setCurrentTime] = useState(0);
    const player = useSelector(state => state.br.player);
    const book = player?.book || {};
    const timePercent = player?.duration ? currentTime / player.duration : 0;

    // const currentStatus = player.status;
    // if (currentStatus == PLAYER_STATUS.PLAYING) {
    //     console.log('it is playing')
    //     setIsPlaying(true);
    // }

    useEffect(() => {
        let interval = null;
        if (player.status == PLAYER_STATUS.PLAYING) {
            interval = setInterval(() => {
                setCurrentTime(currentTime => currentTime + 1);
                // updateCurrentTime();
            }, 1000);
        } else if (player.status != PLAYER_STATUS.PLAYING && currentTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [player.status, currentTime]);

    // const updateCurrentTime = () => {
    //     const seconds = getCurrentTime();
    //     console.log('seconds:', seconds)
    //     if (seconds) {
    //         setCurrentTime(seconds);
    //     }
    // }

    const togglePlay = () => {
        playPause();
    }



    const renderPlayButtonComponent = (status) => {
        if (status === PLAYER_STATUS.PLAYING) {
            return (
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            playPause()
                        }}>
                        <Feather name="pause" size={22} color={colors.black} />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}
                        onPress={togglePlay}>
                        <Feather name="play" size={22} color={colors.black} />
                    </TouchableOpacity>
                </View>
            );
        }
    }

    const renderLoading = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator animating />
            </View>
        );
    }

    const renderControls = () => {
        const status = player.status;
        return (
            <View style={styles.controls}>
                {renderPlayButtonComponent(status)}
                <Text>
                    {seconds2time(currentTime)}/{seconds2time(Math.round(player.duration))}
                </Text>
            </View>
        );
    }
    return (
        <Animated.View
            onLayout={event => null}
            style={[
                styles.playerContainer,
            ]}
        >
            <AudioTimeBar percent={timePercent} />
            <View style={styles.nameAndControl}>
                <View style={styles.row}>
                    <Animated.View style={styles.info}>
                        <Title numberOfLines={1}>{book.title} </Title>
                        <Text numberOfLines={1}>{player?.track?.title} </Text>
                    </Animated.View>
                </View>
                {player?.duration ? renderControls() : renderLoading()}
            </View>
        </Animated.View>
    );
}

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
    },
    controls: {
        alignItems:'center'
    },
    button: {},
    loading: {
    },
});
