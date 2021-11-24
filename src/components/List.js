import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

const List = ({name, city}) => {
  return(
    <>
      <Text style={styles.TextStyle}>Name:{name}</Text>
      <Text style={styles.TextStyle}>City:{city}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  TextStyle:{
    marginVertical: 10,
    fontSize: 30
  }
})

export default List;