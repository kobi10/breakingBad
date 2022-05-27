import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppColors from '../../utilis/AppColors';

const DeathsFlat = (props) => {

    return (
        <TouchableOpacity onPress={props.clickMe}
        style={{
          width: "100%",
          marginTop: 12,
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: AppColors.metallicSeaweed,
        }}
      >
        <View style={{width:'100%',justifyContent:'center',alignItems:'center',padding:10}}>
          <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}>who died? {props.death.death}</Text>

        </View>

        </TouchableOpacity>
    )
   ///
}
export default DeathsFlat;