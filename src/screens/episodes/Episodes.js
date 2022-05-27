import React, {useEffect, useState} from "react";
import {View, Text , FlatList, ActivityIndicator} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from "../../utilis/AppColors";
import EpisodesFlat from "./EpisodesFlat";



const Episodes = props => {

    const episodes_url = 'https://www.breakingbadapi.com/api/episodes';
    const [EpisodesData, setEpisodesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        getEpisodes();
    },[]);

    const getEpisodes = async()=>{
        setIsLoading(true);
        const response = await fetch(episodes_url, {method:'get'});
        const data = await response.json();
        setEpisodesData(data);
        setIsLoading(false);
    };


    return (
        <View style={AppStyle.container}>
            {
                isLoading ? (
                    <ActivityIndicator size='large' color={AppColors.fieryRose} />
                ) : (
                    <FlatList
                       data = {EpisodesData}
                       keyExtractor = {item => item.episode_id }
                       renderItem = {itemEpisode => 
                        <EpisodesFlat
                          episode = {itemEpisode.item}
                          clickMe = {()=> {props.navigation.navigate('EpisodeDetails',{episode: itemEpisode.item})}}
                        />
                       }
                    />
                )
            }
        </View>
    )
}
export default Episodes;