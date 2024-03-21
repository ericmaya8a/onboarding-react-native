import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';
import { getItem } from './utils/asyncStorage';

export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    validateAlreadyOnboard();
  }, []);

  const validateAlreadyOnboard = async () => {
    const onboard = await getItem('onboard');
    setShowOnboarding(!Boolean(onboard));
  };

  if (showOnboarding === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showOnboarding ? 'Onboarding' : 'Home'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
