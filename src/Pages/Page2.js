import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const Page2 = () => {
  return(
    <View style={styles.page2}>
      <Text>Page2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page2:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Page2;