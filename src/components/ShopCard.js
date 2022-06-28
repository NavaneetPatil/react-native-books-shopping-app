import React, { useEffect } from 'react';
import {
    Text,
    View
} from 'react-native';
import { ShopContext } from '../context/Shop';
import { useSelector } from 'react-redux';

// accessing context using .Consumer
const ShopCard = () => {
    const category = useSelector(state => state.br.bookCategory);
    return (
        <ShopContext.Consumer>{({ shopName }) => {
            return (
                <View>
                    <Text>The shop name is {shopName}</Text>
                    <Text>The category is {category}</Text>
                </View>
            )
        }}</ShopContext.Consumer>
    )
}

export default ShopCard;

