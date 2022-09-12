import { View, Text, Image } from "react-native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
} from "@expo-google-fonts/poppins";

const Header = () => {
  const [fontsLoaded, error] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-row items-center pb-3 mx-[30px] justify-between">
      <Image source={require("../assets/main_logo/main_logo.png")} />
      {/* <MainLogo w={30} h={30} imageColor="#232323" /> */}
      <View className="">
        <Text className="font-bold tracking-[2px] text-white text-[15px]">
          Borrow
        </Text>
      </View>

      {/* <ProfileIcon width={30} height={30} /> */}
      {/* <UserIcon w={34} h={34} /> */}
      <Image source={require("../assets/user_img/user_img.png")} />
    </View>
  );
};
export default Header;
