import { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import ArrowBackIcon from "../components/IconsComponents/ArrowBackIcon";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
} from "react-native-simple-radio-button";
import { useState } from "react";

const SelectCryptoScreen = ({ navigation, route }) => {
  // const {
  //   params: {},
  // } = useRoute();
  // const navigation = useNavigation();
  // const navigation = useNavigation();
  const { selectedCrypto } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [radio_props, setRadio_props] = useState([
    { name: "Bitcoin", value: 0 },
    { name: "Litecoin", value: 1 },
  ]);

  const [radioButtonSelected, setRadioButtonSelected] = useState(
    selectedCrypto?.value ? selectedCrypto.value : 0
  );

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="px-5 pt-5 pb-10 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              name: "BorrowerHomeScreen",
              params: { selectedCrypto: radio_props[radioButtonSelected] },
              merge: true,
            })
          }
          className="pr-4"
        >
          <ArrowBackIcon />
        </TouchableOpacity>

        <Text className="text-lg text-[#232323]">Select your crypto</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              name: "BorrowerHomeScreen",
              params: { selectedCrypto: radio_props[radioButtonSelected] },
              merge: true,
            })
          }
          className=""
        >
          <Text className="text-[#7659FB] text-base font-semibold">Close</Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View className="px-7">
        <RadioForm className="" animation={true}>
          {/* To create radio buttons, loop through your array of options */}
          {radio_props.map((obj, i) => (
            <TouchableOpacity
              onPress={() => setRadioButtonSelected(i)}
              className=""
              key={i}
            >
              {/* Header Of Card */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center space-x-[6px]">
                  {/* Logo */}
                  {obj.name === "Bitcoin" ? (
                    // <BitcoinOrangeIcon />
                    <Image
                      source={require("../assets/bitcoin_orange/bitcoin_orange.png")}
                    />
                  ) : (
                    // <LiteIcon />
                    <Image
                      source={require("../assets/litecoin_/litecoin_.png")}
                    />
                  )}

                  {/* Name */}
                  <Text className="text-lg font-semibold">{obj.name}</Text>
                </View>

                {/* Radio Button */}
                <RadioButton labelHorizontal={true}>
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={radioButtonSelected === i}
                    onPress={() => setRadioButtonSelected(i)}
                    borderWidth={1}
                    buttonInnerColor={"#232323"}
                    buttonOuterColor={
                      // radioButtonSelected === i ? "#2196f3" : "#000"
                      "#232323"
                    }
                    buttonSize={14}
                    buttonOuterSize={24}
                    buttonStyle={{}}
                    // buttonWrapStyle={{ marginLeft: 10 }}
                  />
                </RadioButton>
              </View>

              {/* Body Of Card */}
              <View className="p-1 pt-4 pb-10 ">
                <View className="flex-row justify-between">
                  <View className="space-y-1">
                    <Text className="text-[#4F4F4F]">Available balance</Text>
                    <Text className="text-[#4F4F4F]">Current market</Text>
                    <Text className="text-[#4F4F4F]">Loan to value</Text>
                    <Text className="text-[#4F4F4F]">Max loan amount</Text>
                  </View>
                  <View className="space-y-1 items-end ">
                    <Text className="text-[#4F4F4F]">{0.0002354}BTC</Text>
                    <Text className="text-[#4F4F4F]">{"5,400"}USD</Text>
                    <Text className="text-[#4F4F4F]">{"50%"}</Text>
                    <Text className="text-[#4F4F4F]">{"2,700"}USD</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </RadioForm>
      </View>
    </SafeAreaView>
  );
};
export default SelectCryptoScreen;
