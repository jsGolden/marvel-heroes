import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { TouchableOpacity } from "react-native-gesture-handler";

interface PrimaryCardHeroProps {
  name: string;
  alterEgo: string;
}

interface ImageProps {
  [index: string]: ImageSourcePropType; 
}

const charImages: ImageProps = {
  "Howard Stark": require("../assets/chars/howard-stark.png"),
  "Mary Jane": require("../assets/chars/mary-jane.png"),
  "Happy Hogan": require("../assets/chars/happy-hogan.png"),
  "Homem Aranha": require("../assets/chars/spider-man.png"),
  "Pantera Negra": require("../assets/chars/black-panther.png"),
  "Homem de Ferro": require("../assets/chars/iron-man.png"),
  "Caveira Vermelha": require("../assets/chars/red-skull.png"),
  "Doutor Destino": require("../assets/chars/dr-doom.png"),
  "Duende Verde": require("../assets/chars/green-goblin.png"),
  "Deadpool": require("../assets/chars/deadpool.png"),
  "Venom": require("../assets/chars/venom.png"),
  "Justiceiro": require("../assets/chars/punisher.png"),
  "Thanos": require("../assets/chars/thanos.png"),
  "Ronan": require("../assets/chars/ronan.png"),
  "Talos": require("../assets/chars/talos.png"),
}

export function PrimaryCardHero({ name, alterEgo }: PrimaryCardHeroProps) {
  const requiredImage = charImages[name];

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <ImageBackground source={requiredImage} style={styles.img} borderRadius={20}>
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 1)"]}
          style={styles.img}
          locations={[0.3, 1]}
        >
            <View style={styles.about}>
                <Text style={styles.subtitle}>{alterEgo}</Text>
                <Text style={styles.title}>{name}</Text>
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
