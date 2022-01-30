import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorMainScreen from './src/screens/CalculatorMainScreen';
import CalculationHistory from './src/screens/CalculationHistory';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={CalculatorMainScreen}
        />
        <Stack.Screen name="History" component={CalculationHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

