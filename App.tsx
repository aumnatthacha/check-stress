import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Starter from './screens/StarterScreen';
import OnboardScreen from './screens/OnboardScreen';
import AssessmentScreen from './screens/Assessment';
import AssessmentResultsScreen from './screens/AssessmentResultsScreen';
import ResultScreen from './screens/ResultScreen';

export type RootStackParamList = {
  Starter: any;
  OnBoard: any;
  Result: any;
  Assessment: any;
  AssessmentResult: {score: number} | undefined;
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
        <Stack.Screen
          name="AssessmentResult"
          component={AssessmentResultsScreen}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
