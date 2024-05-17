import MovieFlatList from "@/components/MovieFlatList";
import { StyleSheet, Text, View } from "react-native";
import { movies } from "@/data/movies";

const Search = () => {
  // Implement logic / fetch request
  return (
    <View style={styles.container}>
      <MovieFlatList
        data={movies}
        posterMode={false}
        onLayoutModeChange={() => {}}
        type={"search"}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#131A22",
  },
});
