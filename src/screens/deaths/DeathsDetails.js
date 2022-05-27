import React from "react";
import {View, Text} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from '../../utilis/AppColors';


const DeathsDetails = props => {

    const {deaths} = props.route.params;
    return (
        <View style={AppStyle.container}>
            <View style={{width:'100%',backgroundColor: AppColors.metallicSeaweed}}>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>Who killed? {deaths.responsible}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>How died? {deaths.cause}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>Last words: {deaths.last_words}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>On season: {deaths.season}</Text>
            </View>
        </View>
    )
}
export default DeathsDetails;