import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const movieCategories = [
  { title: "Action" },
  { title: "Comedy" },
  { title: "Drama" },
  { title: "Thriller" },
  { title: "Horror" },
  { title: "Romance" },
  { title: "Adventure" },
  { title: "Sci-Fi" },
  { title: "Fantasy" },
  { title: "Animation" },
  { title: "Crime" },
  { title: "Mystery" },
  { title: "Family" },
  { title: "Documentary" },
  { title: "Western" },
];

const DropdownSelector = () => {
  return (
    <SelectDropdown
      data={movieCategories}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.title) || "Category"}
            </Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownButtonStyle: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: "#86828C",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#CAC4D0",
  },
  dropdownMenuStyle: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
});

export default DropdownSelector;
