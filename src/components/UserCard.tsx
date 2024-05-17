import { ImageComponent } from "./ImageComponent";
import { View, Text, StyleSheet } from "react-native";

//@ts-ignore
export const UserCard = ({ userPrompt }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContent}>
        <ImageComponent imgUrl={userPrompt.picture} />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.titleInfo}>{userPrompt.name}</Text>
        <Text style={styles.info}>{userPrompt.email}</Text>
        {userPrompt.verified_email ? (
          <Text style={styles.info}>Email verificado</Text>
        ) : (
          <Text style={styles.info}>Email no verificado: </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "stretch",
    flexShrink: 1,
    backgroundColor: "#edf6f9",
    borderRadius: 12,
    gap: 36,
    padding: 24,
    marginTop: 35,
  },
  imgContent: {
    width:"35%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  userInfoContainer: {
    width:"65%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  titleInfo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  info: {
    fontSize: 16,
    fontWeight: "200",
    color: "#333",
  },
});
