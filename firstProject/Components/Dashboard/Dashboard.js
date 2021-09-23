import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function DisplayAnImageWithStyle() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode: "cover",
            height: 200,
            width: 300,
          }}
          source={require("./developer.jpg")}
        />
      
      </View> 
      
       <Text style={styles.container}>
          Code to connect people with Facebook for Developers. Explore AI,
          business tools, gaming, open source, publishing, social hardware
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 20,
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
});
