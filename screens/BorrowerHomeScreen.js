import { View, Text } from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import BorrowerCardLarge from "../components/BorrowerCardLarge";
import { ScrollView } from "react-native-gesture-handler";

const BorrowerHomeScreen = ({ navigation, route }) => {
  // const navigation = useNavigation();
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin");
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleScrolling = (trueOrFalse) => {
    setScrollEnabled(trueOrFalse);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (route.params?.selectedCrypto) {
      setSelectedCrypto(route.params?.selectedCrypto);
    }
  }, [route.params?.selectedCrypto]);

  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      // nestedScrollEnabled={false}
      contentContainerStyle={{
        paddingBottom: 50,
      }}
      className="bg-[#F6F7F9] h-full"
    >
      <View>
        <View className="bg-[#7659FB] pt-10 h-[285px]">
          {/* Header */}
          <Header />

          <Text className="text-white text-[28px] mt-7 ml-8 font-semibold ">
            Hi Min
          </Text>
        </View>
        <BorrowerCardLarge
          handleScrolling={handleScrolling}
          selectedCrypto={selectedCrypto}
        />
      </View>
    </ScrollView>
  );
};
export default BorrowerHomeScreen;
