import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import MotorcycleListScreen from './components/MotorcycleListScreen';
import MotorcycleFavoritesScreen from './components/MotorcycleFavoritesScreen';
import MotorcycleBookScreen from './components/MotorcycleBookScreen';
import ProfilePage from './components/ProfilePage';
import DashboardScreen from './components/DashboardScreen';
import MotorcycleDetailScreen from './components/MotorcycleDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favorite') {
            iconName = 'heart';
          } else if (route.name === 'Account') {
            iconName = 'person';
          } else if (route.name === 'Book') {
            iconName = 'book';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Favorite" component={MotorcycleFavoritesScreen} />
      <Tab.Screen name="Book" component={MotorcycleBookScreen} />
      <Tab.Screen name="Account" component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MotorcycleList" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="MotorcycleFavoritesScreen" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="MotorcycleBookScreen" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProfilePage" component={HomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="MotorcycleDetail" component={MotorcycleDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
