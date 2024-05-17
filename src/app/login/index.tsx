import { View, Text, Button, StyleSheet } from "react-native";
import { UserCard } from "../../components/UserCard";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  console.log(usePathname());
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "323845197177-d03ustrqi988dlr40166aug0u2q4g1e7.apps.googleusercontent.com",
    iosClientId:
      "323845197177-l0b8vmuo07hbai5q38b5heotnbnbh02n.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication?.accessToken);
      }
    } else {
      setUserInfo(user);
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string | undefined) => {
    if (!token) return;
    try {
      console.log("TOKEN: ", token);
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      console.log("USER: ", user);
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      {userInfo && (
        <View style={styles.cardContainer}>
          <UserCard userPrompt={userInfo} />
        </View>
      )}
      {!userInfo && (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => promptAsync()}
        />
      )}
      <Button
        title="Remove local store"
        onPress={async () => {
          await AsyncStorage.removeItem("@user");
          console.log("Removed");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    gap: 150,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default LoginPage;
