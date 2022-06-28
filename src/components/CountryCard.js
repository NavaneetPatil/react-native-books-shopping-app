import React,{ useContext } from 'react';
import { CountryContext } from '../context/Country';
import {
    Text,
    View
} from 'react-native';

const countryDetail =()=>useContext(CountryContext);

// accessing the country of context using 'useContest'
const CountryCard = () => {
    const {country} = countryDetail(); // useContext(CountryContext); even this works
    return (
        <View>
            <Text>This home is in {country}</Text>
        </View>
    )
}

export default CountryCard;