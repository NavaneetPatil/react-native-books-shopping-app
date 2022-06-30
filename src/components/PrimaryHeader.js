import React, { Component } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { metrics } from '../utils/themes';

class PrimaryHeader extends Component {
    render() {
        const { children } = this.props;
        return (
            <View
                style={
                    [
                        styles.container,
                    ]
                }
            >
                <Image
                    source={require('../images/header-bg.png')}
                    style={styles.headerBg}
                />
                {children}
            </View>
        );
    }
}

export default PrimaryHeader;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        paddingTop: metrics.statusBarHeight,
        height: metrics.headerHeightX3,
        width: metrics.screenWidth,
    },
    headerBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: metrics.headerHeightX3,
        width: metrics.screenWidth,
        resizeMode: 'stretch',
    },
});
