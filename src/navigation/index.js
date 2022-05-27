import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import AppColors from '../utilis/AppColors';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Characters from '../screens/characters/Characters';
import CharactersDetails from '../screens/characters/CharactersDetails';
import Deaths from '../screens/deaths/Deaths';
import DeathsDetails from '../screens/deaths/DeathsDetails';
import Episodes from '../screens/episodes/Episodes';
import EpisodeDetails from '../screens/episodes/EpisodeDetails';
import Quotes from '../screens/quotes/Quotes';


const CharactersStackNavigator = createStackNavigator();
export const CharactersStack = () => {
    return (
        <CharactersStackNavigator.Navigator>
            <CharactersStackNavigator.Screen name="Characters" component={Characters} />
            <CharactersStackNavigator.Screen name="CharactersDetails" component={CharactersDetails} />
        </CharactersStackNavigator.Navigator>

    )
}



const EpisodesStackNavigator = createStackNavigator();
export const EpisodesStack = () => {
    return (
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name="Episodes" component={Episodes}/>
            <EpisodesStackNavigator.Screen name="EpisodeDetails" component={EpisodeDetails}/>
        </EpisodesStackNavigator.Navigator>
    )
}



const DeathsStackNavigator = createStackNavigator();
export const DeathsStack = () => {
    return (
        <DeathsStackNavigator.Navigator>
            <DeathsStackNavigator.Screen name="Deaths" component={Deaths} />
            <DeathsStackNavigator.Screen name="DeathsDetails" component={DeathsDetails} />
        </DeathsStackNavigator.Navigator>
    )
}

const AppBottomTabs = createMaterialBottomTabNavigator();
export const AppTabs = () => {
    return (
        <AppBottomTabs.Navigator  barStyle={{backgroundColor: AppColors.mignigthGreen}} activeColor={AppColors.nyanza} inactiveColor={AppColors.nyanza}>
            <AppBottomTabs.Screen name="CharactersTab" component={CharactersStack} options={{tabBarLabel:'Characters',tabBarIcon: () => <Fontisto name="persons" size={20} color={AppColors.fieryRose}/>}} />
            <AppBottomTabs.Screen name="EpisodeTab" component={EpisodesStack} options={{tabBarLabel:'Episodes',tabBarIcon: () => <Entypo name="tv" size={20} color={AppColors.fieryRose}/>}} />
            <AppBottomTabs.Screen name="QuotesTab" component={Quotes} options={{tabBarLabel:'Quotes',tabBarIcon: () => <Entypo name="typing" size={25} color={AppColors.fieryRose}/>}} />
            <AppBottomTabs.Screen name="DeathsTab" component={DeathsStack} options={{tabBarLabel:'Deaths',tabBarIcon: () => <MaterialCommunityIcons name="emoticon-dead" size={25} color={AppColors.fieryRose}/>}}/>
        </AppBottomTabs.Navigator>
    )
}