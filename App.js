import React from 'react';
import { Text, View } from 'react-native';
import Routes from './src/Navigation/Routes';


const App = () => {
  console.disableYellowBox=true
  
  return (
    <View style={{ flex: 1, }}>
    <Routes/>
    </View>
  );
}

export default App;