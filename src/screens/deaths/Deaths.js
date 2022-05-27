import React, {useEffect, useState} from "react";
import {View, Text , FlatList, ActivityIndicator} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from "../../utilis/AppColors";
import DeathsFlat from "./DeathsFlat";



const Deaths = props => {

    const deaths_url = 'https://www.breakingbadapi.com/api/deaths';
    const[DeathsData, setDeathsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        getDeaths();
    },[]);

    const getDeaths = async()=>{
        setIsLoading(true);
        const response = await fetch(deaths_url, {method:'get'});
        const data = await response.json();
        setDeathsData(data);
        setIsLoading(false);
    }


    return (
        <View style={AppStyle.container}>
            {
                isLoading ? (
                    <ActivityIndicator size='large' color={AppColors.fieryRose} />
                ) : (
                    <FlatList
                        data = {DeathsData}
                        keyExtractor = {item => item.death_id}
                        renderItem = { itemDeath => 
                            <DeathsFlat
                               death = {itemDeath.item}
                               clickMe = {()=> {props.navigation.navigate('DeathsDetails',{deaths: itemDeath.item})}}                 
                            />
                        }
                    />
                )
            }
        </View>
    )
}
export default Deaths;