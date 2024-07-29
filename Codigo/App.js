import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainDisplay from './screens/MainDisplay';
import LoginDisplay from './screens/LoginDisplay';
import RegisterDisplay from './screens/RegisterDisplay';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainDisplay">
        <Stack.Screen name="MainDisplay" component={MainDisplay} />
        <Stack.Screen name="LoginDisplay" component={LoginDisplay} />
        <Stack.Screen name="RegisterDisplay" component={RegisterDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
