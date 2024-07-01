import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import WelcomePage from './src/screens/WelcomePage'
import CompetitionsScreen from './src/screens/CompetitionsScreen'
import CreateAccountScreen from './src/screens/CreateAccount'
import Dashboard from './src/screens/Dashboard'
import LoginScreen from './src/screens/LoginScreen' 

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomePage"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
          <Stack.Screen name="CompetitionsScreen" component={CompetitionsScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
