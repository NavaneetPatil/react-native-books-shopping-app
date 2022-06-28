import React, { useState } from 'react';
import {
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { colors, metrics } from '../utils/themes';
import { Caption, Text, Title } from './Typos';
import BookCover from './BookCover';
import ButtonLink from './ButtonLink';
const CartCard = (props) => {
    const [visibility, setVisibility] = useState(1);
    const { item } = props;
    return (
        <TouchableOpacity
            onPress={null} // open this item
            activeOpacity={1}
        >
            <Animated.View
                style={{
                    ...styles.container,
                    opacity: visibility,
                }}
            >
                <BookCover imageSource={item.image} imageSize={'small'} />
                <View style={styles.card}>
                    <Title numberOfLines={1}>{item.title}</Title>
                    <Text>{item.authors}</Text>
                    <ButtonLink title='remove' onPress={props.onPress} />
                </View>

            </Animated.View>
        </TouchableOpacity>
    );

}

export default CartCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        borderRadius: metrics.radius,
        width: '100%'
    },
    cardHeader: {
    },
    card: {
        paddingLeft: 15
    },
    line: {
        height: 2,
        width: metrics.extraPadding,
        backgroundColor: colors.textSecondary,
        marginBottom: metrics.padding / 2,
    },
});

