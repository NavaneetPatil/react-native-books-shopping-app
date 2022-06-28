import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import { CountryContext } from '../context/Country';
import CountryCard from '../components/CountryCard';


const HomeNested = () => {
    return (
        <SafeAreaView>
            <CountryContext.Provider value={{ country: 'india' }}>
                <View
                    style={{
                        height: '100%',
                        padding: 20,
                        backgroundColor: '#cad9cd',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: 24,
                        }}
                    >
                        Home 2
                    </Text>
                    <CountryCard />
                </View>
            </CountryContext.Provider>
        </SafeAreaView>
    );
};

export default HomeNested;
