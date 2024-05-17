import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";
import { LayoutGrid, LayoutList } from "lucide-react-native";
import { useState } from "react";
import MovieFlatList from "@/components/MovieFlatList";
import DropdownSelector from "@/components/Picker";

const HomeScreen = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [posterMode, setPosterMode] = useState(false);
  const numColumns = posterMode ? 2 : 1;

  const handleLayoutModeChange = () => {
    setPosterMode(!posterMode);
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Pressable onPress={toggleCategories}>
          <DropdownSelector style={styles.categories_style} />
        </Pressable>
        {posterMode ? (
          <Pressable onPress={() => setPosterMode(!posterMode)}>
            <LayoutList size={25} color={"#E6DFC5"} />
          </Pressable>
        ) : (
          <Pressable onPress={() => setPosterMode(!posterMode)}>
            <LayoutGrid size={25} color={"#E6DFC5"} />
          </Pressable>
        )}
      </View>

      <MovieFlatList
        data={movies}
        posterMode={posterMode}
        onLayoutModeChange={handleLayoutModeChange}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#131A22",
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  categories_style: {
    color: "#CAC4D0",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#86828C",
    paddingVertical: 4,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  flatListStyle: {
    flex: 1,
  },
});
