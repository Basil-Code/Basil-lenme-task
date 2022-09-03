import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddNewScreen from "./screens/AddNewScreen";
import BorrowerHomeStackScreen from "./screens/BorrowerHomeStackScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import HomeIcon from "./components/IconsComponents/HomeIcon";
import AddNewIcon from "./components/IconsComponents/AddNewIcon";
import SettingsIcon from "./components/IconsComponents/SettingsIcon";
import NotificationsIcon from "./components/IconsComponents/NotificationsIcon";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="BorrowerHome"
        // activeColor="#000000"
        // inactiveColor=""
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#979797",
        }}
        // barStyle={{ backgroundColor: "tomato" }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;

        //     if (route.name === "BorrowerHome") {
        //       iconName = focused
        //         ? "ios-information-circle"
        //         : "ios-information-circle-outline";
        //     } else if (route.name === "Screen2") {
        //       iconName = focused ? "ios-list-box" : "ios-list";
        //     }

        //     // You can return any component that you like here!
        //     return <Ionicons name={iconName} size={size} color={color} />;
        //   },
        //   tabBarActiveTintColor: "tomato",
        //   tabBarInactiveTintColor: "gray",
        // })}
      >
        <Tab.Screen
          name="BorrowerHome"
          component={BorrowerHomeStackScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, name }) => (
              <HomeIcon
                name={name}
                color={color}
                w={24}
                h={24}
                // imageColor={"blue"}
                // imageColor={"#000000"}
                imageColor={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddNew"
          component={AddNewScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, name, focused }) => (
              <AddNewIcon
                name={name}
                color={color}
                w={24}
                h={24}
                // imgColor={focused ? "#D8D8D8" : "#000000"}
                imgColor={color}
                stroke={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, name }) => (
              <SettingsIcon
                name={name}
                color={color}
                imgColor={color}
                w={24}
                h={24}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, name }) => (
              <NotificationsIcon name={name} color={color} w={24} h={24} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}
