import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { colors,metrics } from '../utils/themes';
const Cat = (props) => {
    return (
        <View style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: colors.textSecondary,
            borderRadius: 10,
            marginRight: 5,
            paddingVertical: 2,
            paddingHorizontal: 10,
            backgroundColor:'white'
        }}>
            <Text>
                {props.name}
            </Text>
        </View>
    )
}

const CategorySelector = () => {
    const category = [
        'Top collections',
        'Science',
        'Novel',
        'Kid Stories',
        'Top collections',
        'Science',
        'Novel',
        'Kid Stories',
    ]
    return (
        <View style={styles.container}>
            <Animated.FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={category}
                renderItem={({ item }) => (
                    <Cat
                        name={item}
                    />
                )}
            />
        </View>
    );
};

export default CategorySelector;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
    },
});
