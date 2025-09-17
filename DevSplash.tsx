// DevSplash.tsx
import { View, Image, StyleSheet } from "react-native";

export default function DevSplash() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/sp1.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
