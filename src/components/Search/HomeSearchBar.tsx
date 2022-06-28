import React from 'react';
import type { Node } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';


const SearchBar: () => Node = () => {

    return (
        <View style={styles.outerDiv}>
            <TextInput
                style={styles.sectionContainer}
                onChangeText={() => { console.log('hii') }}
                // value={}
                placeholder="Search"
                keyboardType="default"
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    outerDiv: {
        width: '100%',
    },
    sectionContainer: {
        height: 36,
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        marginVertical:16,
        color: '#c1bec1',
        fontSize:17,
        borderRadius: 10,
    },
});
