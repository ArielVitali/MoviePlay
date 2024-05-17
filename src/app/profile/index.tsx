import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import profileImg from "../../assets/images/tipo.jpeg";
import { useState } from "react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { router } from "expo-router";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleAccept = () => {
    setModalVisible(false);
    router.back(); //aca te deberia mandar al login denuevo
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={profileImg} style={styles.profileImage} />
      </View>
      <View style={styles.container3}>
        <TextInput
          style={styles.textInput}
          placeholder="Juancito22"
          placeholderTextColor="#E6DFC5"
        ></TextInput>

        <Text style={styles.Text}>Juan Perez</Text>
        <Text style={styles.Text}>juanperez@gmail.com</Text>
      </View>

      <View style={styles.container4}>
        <Pressable
          style={styles.DeleteButton}
          onPress={() => {
            setMessage("Do you confirm the deletion of your account?");
            setModalVisible(true);
          }}
        >
          <Text style={styles.text1}>Delete account</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setMessage("Do you want to logout?");
            setModalVisible(true);
          }}
        >
          <Text style={styles.text1}>Log out</Text>
        </Pressable>
      </View>

      <ConfirmationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        text={message}
        onAccept={handleAccept}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131A22",
    alignItems: "center",
  },
  container2: {
    marginTop: 50,
    paddingBottom: 50,
  },
  container3: {
    width: "100%",
    padding: 50,
    gap: 20,
  },
  container4: {
    padding: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#E6DFC5",
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "#E6DFC5",
  },
  textInput: {
    fontSize: 20,
    fontWeight: "bold",

    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#E6DFC5",
    color: "#E6DFC5",
  },
  DeleteButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#FC4E4D",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#E6DFC5",
  },
  text1: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default Profile;
