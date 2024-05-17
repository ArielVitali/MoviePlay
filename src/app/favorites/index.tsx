import { StyleSheet, Text, View } from "react-native";
import MovieFlatList from "@/components/MovieFlatList";
import { useState } from "react";
import { movies } from "@/data/movies";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <MovieFlatList
        data={movies}
        posterMode={false}
        onLayoutModeChange={() => {}}
        type={"favorite"}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#131A22",
  },
});
