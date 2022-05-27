import react from "react";
import {View, Text, Image} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from "../../utilis/AppColors";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const CharactersDeatails = props => {
    // console.log(JSON.stringify(props));
    // console.log(props.route.params.character);
    
    const {character} = props.route.params;
    const status = character.status;
    let bg;
    switch (status) {
        case 'Alive':
            bg = 'green';
            break;
        case 'Deceased':
            bg = 'red';
            break;
        default:
            bg = 'gray';
            break;
    }
    


    return (
        <View style={AppStyle.container}>
            <View style={{height:"40%",width:"100%"}}>
                <Image style={{width:"100%",height:"100%",resizeMode:"cover"}} source={{uri:character.img}}/>
            </View>


            <View style={{height:"50%", witdh:"100%",paddingTop:20}}>
                <View style={{width:'100%',backgroundColor: AppColors.metallicSeaweed}}>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> name : {character.name}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> nickname: {character.nickname}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> birthday: {character.birthday}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> Occupation: {character.occupation}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> seasson: {character.appearance.join(', ')}</Text>
                <Text style={{fontSize:20,fontWeight:'bold',padding:3,color:AppColors.nyanza,fontWeight:'bold'}}> status: {status}</Text>
             </View>
            </View>
        </View>
    )
}
export default CharactersDeatails;