import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color, colors } from './Theme/colors'
import { spacing } from './Theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './Theme/typography';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/home';
import Details from './Screens/details';




const Stack = createNativeStackNavigator();

export default function App() {




  const [loaded] = useFonts({

    "Bold": require('./assets/Fonts/Poppins-Bold.ttf'),
    "Primary": require('./assets/Fonts/SutonnyMJ-Bold.ttf'),
    "secondary": require('./assets/Fonts/kalpurush.ttf'),

  });

  if (!loaded) {
    return null;

  }



  return (

    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

