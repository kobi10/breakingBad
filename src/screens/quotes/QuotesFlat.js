import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppColors from '../../utilis/AppColors';
import AppStyle from '../../utilis/AppStyle';

const QuotesFlat = (props) => {
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
            <Text style={{color:AppColors.nyanza,fontWeight:'bold'}}>{props.quotes.author}:</Text>
            <Text style={{color:AppColors.nyanza,fontWeight:'bold'}}>{props.quotes.quote}</Text>


        </View>
        </TouchableOpacity>
    )
}

export default QuotesFlat;