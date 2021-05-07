import React from "react";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { TouchableOpacity } from "react-native-gesture-handler";
import { CharProps } from "../types";

interface CardProps {
  char: CharProps;
}

export function PrimaryCardHero({ char }: CardProps) {
  const navigation = useNavigation();

  function handleCardPress() {
    navigation.navigate('Details', { char });
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7}
      onPress={handleCardPress}
    >
      <ImageBackground source={{ uri: char.imageUri }} style={styles.img} borderRadius={20}>
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 1)"]}
          style={styles.img}
          locations={[0.3, 1]}
        >
            <View style={styles.about}>
                <Text style={styles.subtitle}>{char.alterEgo}</Text>
                <Text style={styles.title}>{char.name}</Text>
            </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
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
  about: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      paddingHorizontal: 10
  },
  subtitle: {
      color: colors.white,
      fontSize: 12,
      fontFamily: fonts.khula.regular
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.khula.extraBold,
    lineHeight: 30,
    flexWrap: 'wrap'
  },
});
