import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {AppTabs } from './src/navigation';

const App = props => {
    return (
      <NavigationContainer>
        <AppTabs/>
      </NavigationContainer>

    )
}
export default App;
