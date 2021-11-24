import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const Page1 = () => {
  return(
    <View style={styles.page1}>
      <Text>Page1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page1:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Page1;