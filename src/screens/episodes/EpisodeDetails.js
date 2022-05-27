import React from "react";
import {View, Text} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from '../../utilis/AppColors';


const EpisodesDetails = props => {

    const {episode} = props.route.params;
    return (
        <View style={AppStyle.container}>
            <View style={{width:'100%',backgroundColor: AppColors.metallicSeaweed}}>
            <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>Episode Title: {episode.title}</Text>
            <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>Episode date: {episode.air_date}</Text>
            <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>characters:</Text>
            <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>{episode.characters.join('\n')}</Text>
            </View>
        </View>
    )
}
export default EpisodesDetails;