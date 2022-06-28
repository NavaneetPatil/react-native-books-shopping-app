import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import ShopCard from '../components/ShopCard';
import { ShopContext } from '../context/Shop';


const ShopNested = () => {
    return (
        <SafeAreaView>
            <ShopContext.Provider value={{shopName:'Appollo'}}>
                <View
                    style={{
                        height: '100%',
                        padding: 20,
                        backgroundColor: '#ffcccc',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: 24,
                        }}
                    >
                        Shop 2
                    </Text>
                    <ShopCard/>
                </View>
            </ShopContext.Provider>
        </SafeAreaView>
    );
};

export default ShopNested;
