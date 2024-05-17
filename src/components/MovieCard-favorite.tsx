import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Heart, Star, CalendarDays, Clock } from "lucide-react-native";
import { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal";

const MovieCardFavorite = ({ movie }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [favorite, setFavorite] = useState(true);
  const [accept, setAccept] = useState(false);

  const handleAccept = () => {
    setFavorite(!favorite);
    setModalVisible(false);
  };

  return (
    <View style={styles.movie_container_card}>
      <Image
        source={movie.poster_path}
        style={{ width: "30%", aspectRatio: 0.667 }}
      />
      <View style={styles.movie_info_card}>
        <Text style={styles.title_card}>{movie.title}</Text>
        <View style={styles.infoText_container}>
          <Star size={20} color={"#F5C937"} fill={"#F5C937"} />
          <Text
            style={{
              color: "#DCDCDC",
              flexShrink: 1,
            }}
          >
            {movie.vote_average}
          </Text>
        </View>

        <View style={styles.infoText_container}>
          <CalendarDays size={20} color={"#DCDCDC"} />
          <Text
            style={{
              color: "#DCDCDC",
              flexShrink: 1,
            }}
          >
            {movie.release_date}
          </Text>
        </View>
        <View style={styles.infoText_container}>
          <Clock size={20} color={"#DCDCDC"} />
          <Text
            style={{
              color: "#DCDCDC",
              flexShrink: 1,
            }}
          >
            2h 20min
          </Text>
        </View>
      </View>
      <View style={styles.arrowContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Heart
            size={25}
            color={favorite ? "#FC4E4D" : "#DCDCDC"}
            fill={favorite ? "#FC4E4D" : "transparent"}
          />
        </Pressable>
      </View>
      <ConfirmationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onAccept={handleAccept}
        text={"Are you sure you want to remove from favorites?"}
      />
    </View>
  );
};

export default MovieCardFavorite;

const styles = StyleSheet.create({
  movie_container_card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 8,
    gap: 16,
  },
  movie_container_poster: {
    flex: 1,
    justifyContent: "space-between",
    padding: 8,
  },
  movie_info_poster: {
    flex: 1,
    display: "flex",
    paddingVertical: 14,
    paddingHorizontal: 8,
    gap: 10,
    justifyContent: "space-around",
    backgroundColor: "#302E33",
  },
  movie_info_card: {
    flex: 1,
    display: "flex",
    gap: 6,
    justifyContent: "space-around",
  },
  title_poster: {
    color: "#DCDCDC",
    fontSize: 16,
    fontWeight: "bold",
    flexShrink: 1,
  },
  title_card: {
    color: "#DCDCDC",
    fontSize: 22,
    fontWeight: "bold",
    flexShrink: 1,
  },
  infoText_container: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },

  arrowContainer: {
    justifyContent: "center",
  },
});
