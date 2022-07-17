import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native'
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import IssFacts from "./screens/IssFacts";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Iss Facts" component={IssFacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;