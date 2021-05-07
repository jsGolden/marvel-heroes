import React from "react";

import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";


interface CardProps {
  imageUri: string;
}

export function CardMovie({ imageUri }: CardProps) {


  return (
    <View 
      style={styles.container} 
    >
      <ImageBackground source={{ uri: imageUri }} style={styles.img} borderRadius={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 6,
    width: 160,
    height: 230,
  },
  img: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
});
