import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import HomeScreenHeader from "@/components/HomeScreenHeader";
import SearchScreenHeader from "@/components/SearchScreenHeader";
import GeneralScreenHeader from "@/components/GeneralScreenHeader";
import SearchProvider from "../providers/SearchProvider";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login/index" />
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#E6DFC5",
          },
          header: () => <HomeScreenHeader />,
        }}
      />
      {/* <SearchProvider></SearchProvider> */}
      <Stack.Screen
        name="search/index"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#E6DFC5",
          },
          header: () => <SearchScreenHeader />,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen name="movie-detail/[id]" />
      <Stack.Screen
        name="profile/index"
        options={{
          headerTitle: "Profile",
          header: () => <GeneralScreenHeader tabName={"Profile"} />,
        }}
      />
      <Stack.Screen
        name="favorites/index"
        options={{
          headerTitle: "Favorites",
          header: () => <GeneralScreenHeader tabName={"Favorites"} />,
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  header: {
    paddingTop: 42,
    paddingBottom: 10,
    paddingHorizontal: 28,
    backgroundColor: "#E6DFC5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // X, Y - positive Y value puts the shadow below the box
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
});
