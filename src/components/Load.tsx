import React from "react";
import { 
  ActivityIndicator, 
  StyleSheet, 
  Text, 
  View 
} from "react-native";

import { 
  MarvelIcon,
} from '../assets/icons/index';

import { primaryColors } from "../styles/colors";

export function Load() {
  return (
    <View style={styles.container}>
      <MarvelIcon 
        fill={primaryColors.red} 
        style={styles.icon} 
        width={125}
        height={125}
      />
      <ActivityIndicator size="large" color={primaryColors.red} />
      
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
    icon: {
      marginBottom: 30
    },
    loadingText: {
      marginTop: 15,
    }
  });
  