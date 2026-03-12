import React from 'react';
import { APP_ROUTES } from './src/constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavBar } from './src/components/NavBar';
import { useAuth } from './src/api/hooks/useCheckAuth';

import { Test } from './src/screens/Test';
import StartTest from './src/screens/Test';
import AuthScreen from './src/screens/Auth';
import HomeScreen from './src/screens/Home';
import Results from './src/screens/Results';
import Profile from './src/screens/Profile';
import RulesScreen from './src/screens/Rules';
import Rating from './src/screens/Rating';

const Tab = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Rules: RulesScreen,
  },
});
const ProfileStack = createStackNavigator();
const Stack = createStackNavigator();

function TestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={APP_ROUTES.TEST_START}
        component={StartTest}
        options={{
          headerLeft: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={APP_ROUTES.TEST}
        component={Test}
        options={{
          headerLeft: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={APP_ROUTES.RESULTS}
        component={Results}
        options={{
          headerLeft: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={APP_ROUTES.SIGN_IN}
        component={Profile}
        options={{
          headerLeft: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
      />

      <ProfileStack.Screen
        name={APP_ROUTES.RATING}
        component={Rating}
        options={{
          headerLeft: () => null,
          headerShown: false,
          gestureEnabled: true,
        }}
      />
    </ProfileStack.Navigator>
  );
}

function App(): React.JSX.Element {
  const { user } = useAuth();

  const SettingsPage = user ? ProfileStackScreen : AuthScreen;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={APP_ROUTES.HOME}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black', // Ensure a solid background
            borderTopColor: 'black', // Match the navbar color
            borderTopWidth: 1, // Optional: Adjust thickness
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
        }}
        tabBar={(props) => <NavBar {...props} />}
      >
        <Tab.Screen name={APP_ROUTES.HOME} component={HomeScreen} />
        <Tab.Screen name={APP_ROUTES.RULES} component={RulesScreen} />
        <Tab.Screen name={APP_ROUTES.TEST_START} component={TestStack} />
        <Tab.Screen name={APP_ROUTES.SIGN_IN} component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
