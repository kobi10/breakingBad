import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppColors from '../../utilis/AppColors';

const EpisodesFlat = (props) => {

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
              <Text style={{color:AppColors.nyanza, fontWeight:'bold'}}>Season:{props.episode.season} Episode: {props.episode.episode} </Text>

          </View>
        </TouchableOpacity>
    )

}
export default EpisodesFlat;