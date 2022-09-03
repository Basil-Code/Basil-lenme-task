import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BorrowerHomeScreen from "./BorrowerHomeScreen";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import SelectCryptoScreen from "./SelectCryptoScreen";

const BorrowerHomeStackScreen = () => {
  const BorrowerHomeStack = createNativeStackNavigator();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <BorrowerHomeStack.Navigator>
      <BorrowerHomeStack.Screen
        name="BorrowerHomeScreen"
        component={BorrowerHomeScreen}
      />
      <BorrowerHomeStack.Screen
        name="SelectCryptoScreen"
        component={SelectCryptoScreen}
      />
    </BorrowerHomeStack.Navigator>
  );
};
export default BorrowerHomeStackScreen;
