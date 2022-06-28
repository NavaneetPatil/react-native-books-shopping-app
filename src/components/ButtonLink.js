import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { colors, metrics } from '../utils/themes';

const ButtonLink = (props) => {
    return (
        <View >
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Text style={styles.button}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ButtonLink;

const styles = StyleSheet.create({
    button: {
        paddingTop:5,
        paddingBottom:5,
        color: colors.linkBlue
    },
});
