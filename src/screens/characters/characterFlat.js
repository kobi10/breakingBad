import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import AppColors from '../../utilis/AppColors';

const CharacterFlat = (props) => {

    // const status = props.character.status;
    // let bg = AppColors.metallicSeaweed;
    // console.log(status);
    // switch (status) {
    //     case 'Alive':
    //         bg = AppColors.nyanza;
    //         break;
    //     case 'Deceased':
    //         bg = AppColors.fieryRose;
    //         break;
    //     default:
    //         bg = AppColors.queenBlue;
    //         break;
    // }

  return (
    <TouchableOpacity onPress={props.clikeMe}
      style={{
        width: "100%",
        marginTop: 12,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: AppColors.metallicSeaweed,
      }}
    >
      <View style={{ width: "70%", padding: 10 }}>
        <Text style={{ color: AppColors.nyanza, fontSize: 18 }}>
          {props.character.name}
        </Text>
        <Text style={{ color: AppColors.nyanza, fontSize: 15 }}>
          {props.character.nickname}
        </Text>
      </View>

      <View style={{ width: "30%" }}>
        <Image
          source={{ uri: props.character.img }}
          style={{ width: 100, height: 100, resizeMode: "cover" }}
        />
      </View>
      {/* <View style={{ width: "2%", backgroundColor:bg }}>

      </View> */}
    </TouchableOpacity>
  );
};

export default CharacterFlat;
