import { StyleSheet, Text, View, Pressable } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";

const GeneralScreenHeader = ({ tabName }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back_arrow}>
        <ChevronLeft size={30} color={"#000"} />
      </Pressable>
      <View style={styles.child_container}>
        <Text style={styles.name}>{tabName}</Text>
      </View>
    </View>
  );
};

export default GeneralScreenHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 130,
    paddingTop: 60,
    paddingBottom: 5,
    backgroundColor: "#E6DFC5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // X, Y - positive Y value puts the shadow below the box
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  child_container: {
    width: "100%",
    paddingRight: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },

  back_arrow: {
    marginLeft: 10,
  },
});
