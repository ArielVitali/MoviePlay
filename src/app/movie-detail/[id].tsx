import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { movies } from "../../data/movies";

const MovieDetail = () => {
  const { id } = useLocalSearchParams<{id: string}>();

  // TODO: fetch movie from API

  const foundMovie = movies.find((movie) => {
    return movie.movie_id == id;
  });
  return (
    <View style={styles.container}>
      <Text>{foundMovie?.title}</Text>
      <Text>{foundMovie?.overview}</Text>
      <Text>{foundMovie?.release_date}</Text>
      <Text>{foundMovie?.vote_average}</Text>
      <Text>{foundMovie?.vote_count}</Text>
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
