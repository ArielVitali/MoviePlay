import { FlatList, StyleSheet, View } from "react-native";
import MovieCard from "./MovieCard";
import MovieCardFavorite from "./MovieCard-favorite";

interface MovieFlatListProps {
  data: [];
  posterMode: boolean;
  onLayoutModeChange: () => void;
  type: string;
}

const MovieFlatList: React.FC<MovieFlatListProps> = ({
  data,
  posterMode,
  onLayoutModeChange,
  type,
}) => {
  const numColumns = posterMode ? 2 : 1;

  return (
    <FlatList
      style={styles.flatListStyle}
      data={data}
      renderItem={({ item }) =>
        type === "favorite" ? (
          <MovieCardFavorite movie={item} />
        ) : (
          <MovieCard movie={item} posterMode={posterMode} />
        )
      }
      key={numColumns}
      numColumns={numColumns}
      contentContainerStyle={{ gap: 12 }}
      columnWrapperStyle={posterMode ? { gap: 12 } : null}
      ItemSeparatorComponent={
        () =>
          !posterMode ? (
            <View
              style={{
                height: 10,
                borderBottomColor: "#29313B",
                borderBottomWidth: 0.8,
              }}
            />
          ) : null
        // React.FC<{ children?: React.ReactNode }> -- If you need to pass children
      }
    />
  );
};

export default MovieFlatList;

const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
  },
});
