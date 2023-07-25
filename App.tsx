import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Starter from './screens/StarterScreen';
import OnboardScreen from './screens/OnboardScreen';
import AssessmentScreen from './screens/Assessment';

export type RootStackParamList = {
  Starter: undefined;
  OnBoard: undefined;
  Assessment: undefined;
  // Assessment: {result: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="OnBoard" component={OnboardScreen} />
        <Stack.Screen name="Assessment" component={AssessmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
