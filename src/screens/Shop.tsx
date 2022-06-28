import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';


const Shop = ({ navigation }) => {
    return (
        <SafeAreaView>
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
                    Shop 1
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Shop2')}
                    style={{
                        backgroundColor: "#ff9999",
                        paddingVertical: 7,
                        paddingHorizontal: 15,
                        borderRadius: 10,
                    }}
                >
                    <Text>shop 2</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Shop;
