//ios file

//import componenet
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create component
const App = () => {
    return ( 
        <Text> Hello worlds! </Text>
    );
};

//render to the device
AppRegistry.registerComponent('LearnReact', () => App);
