import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const [finalText, setFinalText] = React.useState('');
    function saveNameHandler() {
        setFinalText(text);
    }
    // useEffect(() => {
    //     async function someFn() {
    //         const user = await AsyncStorage.getItem('user')
    //         console.log('this is user', user)
    //         if (user?.['name']) {
    //             setFinalText(user?.['name']);
    //         }
    //         await AsyncStorage.setItem('user', JSON.stringify({ name: 'navaneet' }))
    //     };
    //     someFn();
    // }, [])

    return (
        <SafeAreaView>
            <View
                style={{
                    height: '100%',
                    padding: 20,
                    backgroundColor: '#cad9cd',
                    alignItems: 'center'
                }}>
                <Text>Hii, {finalText}</Text>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    <TextInput
                        placeholder="Search"
                        right={<TextInput.Affix text="/100" />}
                        onChangeText={setText}
                        style={{
                            height: 25,
                            flex: 0.8,
                            paddingTop: 10,
                            paddingBottom: 10
                        }}
                    />
                    <View style={{
                        flex: 0.2,
                        paddingTop: 10,
                        paddingBottom: 10
                    }}>
                        <Button
                            title="save"
                            onPress={saveNameHandler}
                        />
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 24,
                    }}
                >Home 1</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: 'space-between'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home2')}
                        style={styles.sectionTitle}
                    >
                        <Text>Click to Home 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        backgroundColor: "#a7ad86",
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 10,

    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Home;
