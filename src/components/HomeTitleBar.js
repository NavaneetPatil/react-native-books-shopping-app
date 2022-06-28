import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-paper';

const HomeTitleBar = ({ cartOnPress }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                right={<TextInput.Affix text="/100" />}
                onChangeText={() => null}
                style={styles.searchBar}
            />
            <TouchableOpacity onPress={cartOnPress}
            >
                <MaterialIcons name="shopping-cart" size={24} />
            </TouchableOpacity>
        </View >
    );
}


export default HomeTitleBar;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchBar: {
        width:'80%',
        height: 20,
        borderBottomColor:'black'
    }
});
