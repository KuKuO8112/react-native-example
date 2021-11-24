import { assertLiteral } from "@babel/types";
import React from "react";
import { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { StyleSheet } from "react-native";
import List from "../components/List";

const Page4 = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
  .then(res => res.json())
  .then(data => {
    setData(data);
  })
  let Name = data.map(e => e.name);
  let City = data.map(e => e.city);
  const lastdata = () => {
    let c = count - 1;
    if(c < 0){
      Alert.alert("已是第一筆資料")
    }else{
      setCount(c);
    }
  }
  const nextdata = () => {
    let c = count + 1;
    if(c == Name.length){
      Alert.alert("已是最後一筆資料")
    }else{
      setCount(c);
    }
  }
  return(
    <View style={styles.Page4}>
      <View style={styles.center}>
        <List name={Name[count]} city={City[count]} />
      </View>
      <View style={[styles.center, {flexDirection: "row"}]}>
      <Pressable style={{marginHorizontal: 20}} onPress={lastdata}>
        <Text style={styles.button}>上一筆資料</Text>
      </Pressable>
      <Pressable style={{marginHorizontal: 20}} onPress={nextdata}>
        <Text style={styles.button}>下一筆資料</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Page4:{
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: "#cccccc",
    borderRadius: 5,
    padding: 5,
    fontSize: 20
  }
})

export default Page4;