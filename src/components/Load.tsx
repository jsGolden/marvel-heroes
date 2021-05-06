import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { primaryColors } from "../styles/colors";

export function Load() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={primaryColors.red} />
      <Text style={styles.loadingText}>Carregando ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingText: {
      marginTop: 15,
    }
  });
  