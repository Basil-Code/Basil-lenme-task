import { useEffect, useState } from "react";
import { View, Text, Switch, TouchableOpacity, Image } from "react-native";
// import CircleSlider from "react-native-circle-slider";
import ChevronDownIcon from "./IconsComponents/ChevronDownIcon";
import ArrowCircleIcon from "./IconsComponents/ArrowCircleIcon";
import { useNavigation } from "@react-navigation/native";
import CircularSlider from "./CircularSlider";
import ArcSlider from "./ArcSlider";

const BorrowerCardLarge = ({ selectedCrypto, handleScrolling }) => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsSwitchEnabled((previousState) => !previousState);

  const [sliderValue, setSliderValue] = useState(50);

  const navigation = useNavigation();

  return (
    <View className="items-center justify-center bg-white mx-6 rounded-lg -mt-28 shadow-sm z-20 pb-10">
      <Text className="font-semibold text-sm mt-7">
        How much would you like to borrow?
      </Text>

      <View className="flex-row bg-[#F5F4F8] mt-3 items-center px-2 space-x-2 py-2 rounded-lg">
        <View>
          <View className="flex-row space-x-1">
            {/* <BitcoinDarkIcon /> */}
            <Image
              source={require("../assets/bitcoin_dark/bitcoin_dark.png")}
            />
            <Text className="text-xs" c>
              Do you own crypto?
            </Text>
          </View>
          <Text className="text-xs">Increase your limit up to $10,000</Text>
        </View>

        <Switch
          trackColor={{ true: "#7659FB", false: "#C2C2C2" }}
          thumbColor="#FFFFFF"
          ios_backgroundColor="#C2C2C2"
          onValueChange={toggleSwitch}
          value={isSwitchEnabled}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectCryptoScreen", {
            selectedCrypto,
          });
        }}
        className="flex-row items-center space-x-1 mt-5"
      >
        {selectedCrypto.name ? (
          selectedCrypto.name === "Bitcoin" ? (
            // <BitcoinOrangeIcon />
            <Image
              source={require("../assets/bitcoin_orange/bitcoin_orange.png")}
            />
          ) : (
            // <LiteIcon />
            <Image source={require("../assets/litecoin_/litecoin_.png")} />
          )
        ) : (
          // <BitcoinOrangeIcon />
          <Image
            source={require("../assets/bitcoin_orange/bitcoin_orange.png")}
          />
        )}
        {/* <BitcoinOrangeIcon /> */}
        <Text className="">
          {selectedCrypto.name ? selectedCrypto.name : "BitCoin"}
        </Text>
        <ChevronDownIcon
          // on={navigation.navigate("SelectCryptoScreen")}
          color="#686666"
          className=""
        />
      </TouchableOpacity>

      <View className="relative items-center mt-3">
        {/* <View className=""> */}
        <View className="z-50">
          <CircularSlider
            width={200}
            height={200}
            meterColor="#232323"
            // textColor="#fff"
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
            handleScrolling={handleScrolling}
          />
          {/* <ArcSlider
            width={200}
            height={200}
            meterColor="#232323"
            // textColor="#fff"
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
            handleScrolling={handleScrolling}
          /> */}
        </View>
        {/* </View> */}

        <View className="absolute items-center justify-center -z-20 mt-16 ">
          <Text className="text-2xl font-semibold text-[#151515]">
            ${Math.trunc(sliderValue * 7.2222)}
          </Text>
          <Text className="mt-2 text-[#585858]">
            <Text className="text-[#6852CB]">Max </Text>
            $2,700
          </Text>
        </View>

        <View className="absolute flex-row items-center justify-center space-x-20 -z-20 mt-52 ">
          <Text className="text-[#585858]">$50</Text>
          {isSwitchEnabled ? (
            <Text className="text-[#585858]">$9.7k</Text>
          ) : (
            <Text className="text-[#585858]">$2.7k</Text>
          )}
        </View>

        <Text className="flex-row text-[#585858] mt-12 px-1">
          Total amount with applicable
          <Text className=""> fees:</Text> {/* 50 * 0.2 = 10 */}
          {/* {Math.trunc(sliderValue * 10 + sliderValue)} */}
          {Math.trunc(sliderValue * 50 * 0.2)}
        </Text>

        <TouchableOpacity className="mt-6 ml-44">
          <ArrowCircleIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BorrowerCardLarge;
