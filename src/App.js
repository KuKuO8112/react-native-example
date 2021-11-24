import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Home from './Pages/Home';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Page4" component={Page4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;