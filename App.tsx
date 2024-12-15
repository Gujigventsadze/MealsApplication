import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import CountryPage from "./Screens/CountryPage";
import RecipePage from "./Screens/RecipePage";
import Icon from "react-native-vector-icons/FontAwesome5";
import AboutPage from "./Screens/AboutPage";
import ContactScreen from "./Screens/ContactScreen";

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="CountryPage" component={CountryPage} />
      <Stack.Screen name="RecipePage" component={RecipePage} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "black",
        }}
        initialRouteName="Home"
      >
        <Bottom.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: () => <Icon name="inbox" size={20} />,
          }}
        />
        <Bottom.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => <Icon name="home" size={20} />,
          }}
        />
        <Bottom.Screen
          name="About"
          component={AboutPage}
          options={{
            tabBarIcon: () => <Icon name="info" size={20} />,
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
