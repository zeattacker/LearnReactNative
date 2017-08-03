//ios file

//import library

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/ios/components/Header';
import AlbumList from './src/ios/components/AlbumList';


//create component

const App = () => (
        <View style={{ flex: 1 }}>
            <Header title={'Albums'} />
            <AlbumList />     
        </View>
);

//render to the device

AppRegistry.registerComponent('LearnReact', () => App);
