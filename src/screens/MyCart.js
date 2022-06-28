import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, metrics } from '../utils/themes';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from '../components/CartCard';
import AnimatedFlatList from '../components/AnimatedFlatList';
import * as actionTypes from '../store/ActionTypes';
import images from '../images/imagesObj';

const PlaceOrder = (props) => {
    const { totalPrice } = props;
    return (
        <View style={styles.placeOrderContainer}>
            <View style={styles.totalPriceContainer}>
                <Text>Total :
                    <Text style={styles.totalPriceText}> {totalPrice}/-</Text>
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => null}
                style={styles.buyNowButton}
            >
                <Text>
                    Buy Now
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const CartScreen = ({navigation}) => {
    const books = useSelector(state => state.br.myCart);
    let totalPrice = 0;
    books.forEach(book => {
        totalPrice += book.price;
    })
    const [total, setTotal] = useState(totalPrice)

    const dispatch = useDispatch();
    const removeItemHandler = (item) => {
        dispatch({
            type: actionTypes.REMOVE_ITEM_FROM_CART,
            payload: item
        });
        setTotal(total - item.price);
    }
    return (
        <View style={styles.topContainer}>
            <View style={styles.container}>{
                !books.length
                    ? (<View style={styles.emptyCartContainer}>
                        <View><Text style={styles.emptyCartTxt}>Cart is empty !!</Text></View>
                        <View>
                            <Image style={styles.emptyCartImg} source={images.emptyCart} />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home Screen')}
                            style={styles.continueShopping}
                        >
                            <Text>Continue Shop</Text>
                        </TouchableOpacity>

                    </View>)
                    : null
            }
                <AnimatedFlatList
                    data={books}
                    renderItem={({ item, index }) => (
                        <CartCard
                            item={item}
                            index={index}
                            onPress={() => {
                                removeItemHandler(item)
                            }
                            }
                        />
                    )}
                />
            </View>
            {books.length ? <PlaceOrder totalPrice={total} /> : null}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: metrics.padding,
    },
    lottie: {
        width: 280,
        height: 280,
    },
    placeOrderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: colors.lightGrey,
        paddingRight: 5
    },
    buyNowButton: {
        backgroundColor: 'orange',
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2
    },
    buyNowButtonText: {
        fontSize: 20
    },
    totalPriceText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    totalPriceContainer: {
        justifyContent: 'center'
    },
    emptyCartContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    emptyCartTxt: {
        fontSize: 25
    },
    emptyCartImg: {
        resizeMode: 'contain',
        height: 250,
    },
    continueShopping: {
        backgroundColor: colors.primaryLight,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 10,
    }
});
