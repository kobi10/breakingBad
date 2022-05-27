import React, { useEffect,useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from '../../utilis/AppColors';
import CharacterFlat from './characterFlat';

const Characters = props => {

    const characters_url = 'https://www.breakingbadapi.com/api/characters';
    const [ charactersData, setCharactersData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    useEffect(() => {
        getCharacters();
    },[]);
    
    const getCharacters = async() => {
        setIsLoading(true);
        const response = await fetch(characters_url, {method:'get'});
        const data = await response.json();
        setCharactersData(data);
        setIsLoading(false);
    }

    return(
        <View style={AppStyle.container}>
            {
                isLoading ? (
                    <ActivityIndicator size='large' color={AppColors.fieryRose} />
                ) : (
                    <FlatList
                        data = {charactersData}
                        keyExtractor = {item => item.char_id}
                        renderItem = {itemChar =>
                            <CharacterFlat 
                               character = {itemChar.item}
                               clikeMe = {() => {props.navigation.navigate('CharactersDetails', {character: itemChar.item}) }}
                            
                            />
                        }
                    />
                )
            }
            

        </View>
    )
}

export default Characters;