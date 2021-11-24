import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const Page3 = () => {
  return(
    <View style={styles.page3}>
      <Text>Page3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page3:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Page3;