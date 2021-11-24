import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const Home = () => {
  return(
    <View style={styles.Home}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Home:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home;