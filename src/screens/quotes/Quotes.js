import React, {useEffect, useState} from "react";
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import AppStyle from '../../utilis/AppStyle';
import AppColors from "../../utilis/AppColors";
import QuotesFlat from "./QuotesFlat";


const Quotes = props => {
    const quotes_url = 'https://www.breakingbadapi.com/api/quotes';
    const [QuotesData, setQuotesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        getQuotes();
    },[]);

    const getQuotes = async()=>{
        setIsLoading(true);
        const response = await fetch(quotes_url, {method:'get'});
        const data = await response.json();
        setQuotesData(data);
        setIsLoading(false);
    }

    return (
        <View style={AppStyle.container}>
            <View style={{width:'100%',height:'5%'}}></View>
            {
                isLoading ? (
                    <ActivityIndicator size='large' color={AppColors.fieryRose} />
                ) : (
                    <FlatList
                      data = {QuotesData}
                      keyExtractor = {item => item.quote_id}
                      renderItem = {itemQuotes => 
                      <QuotesFlat
                          quotes = {itemQuotes.item}
                      />
                    }
                    />
                )
            }

        </View>
    )
}
export default Quotes;