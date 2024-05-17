import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Search, ChevronLeft } from "lucide-react-native";
import { Link, router } from "expo-router";
import { useState } from "react";

const SearchScreenHeader = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.child_container}>
        <Pressable onPress={() => router.back()} style={styles.back_arrow}>
          <ChevronLeft size={25} color={"#000"} />
        </Pressable>
        <TextInput
          value={searchString}
          onChangeText={setSearchString}
          style={styles.text_input}
          placeholder="Search here"
        ></TextInput>
        <Pressable
          style={styles.search_icon}
          onPress={() => console.log(searchString)}
        >
          <Search size={25} color={"#000"} />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchScreenHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 130,
    paddingTop: 50,
    paddingHorizontal: 18,
    backgroundColor: "#E6DFC5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // X, Y - positive Y value puts the shadow below the box
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  child_container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "stretch",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 0.8,
    borderColor: "#29313B",
    borderRadius: 200,
    paddingHorizontal: 16,
  },
  back_arrow: {
    paddingVertical: 8,
  },
  text_input: {
    flex: 1,
    fontSize: 20,
  },
  search_icon: {
    paddingVertical: 8,
  },
});
