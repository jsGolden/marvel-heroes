import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import {
  AgeIcon,
  HeightIcon,
  WeightIcon,
  UniverseIcon
} from '../assets/icons';

import colors from "../styles/colors";
import { AbilitiesProps, CharacteristicsProps, CharProps } from "../types";
import { SvgProps } from "react-native-svg";
import SkillBar from "../components/SkillBar";
import fonts from "../styles/fonts";
import { CardMovie } from "../components/CardMovie";

interface Params {
  char: CharProps;
}

interface IconsInterface {
  [index: string]: (props: SvgProps) => JSX.Element;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const { char } = route.params as Params;

  const characteristicIcons: IconsInterface = {
    birth: AgeIcon,
    height: HeightIcon,
    weight: WeightIcon,
    universe: UniverseIcon,
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <ImageBackground
        source={{ uri: char.imageUri }}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          locations={[0.4, 1]}
          style={styles.gradientContainer}
        >
          <View style={styles.nameContainer}>
            <Text style={styles.subtitle}>{char.alterEgo}</Text>
            <Text style={styles.title}>{char.name}</Text>
          </View>

          <View style={styles.characteristicsContainer}>
            {Object.keys(char.caracteristics).map((characteristic) => {
              const CharacteristicIcon = characteristicIcons[characteristic];
              const characteristicValue =
                char.caracteristics[
                  characteristic as keyof CharacteristicsProps
                ];

              return (
                <View key={characteristic} style={styles.iconContainer}>
                  <CharacteristicIcon
                    fill={colors.white}
                    width={34}
                    height={34}
                  />

                  <Text style={styles.characteristicText}>
                    { typeof characteristicValue !== 'object'
                      ? (characteristic ==='birth' ? 2021 - Number(characteristicValue) + ' anos' : characteristicValue)
                      : characteristicValue.value + (characteristic === 'weight' ? ' kg' : ' m')
                    }
                  </Text>
                </View>
              );
            })}
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.biography}>{char.biography}</Text>

        <Text style={styles.infoTitle}>Habilidades</Text>

        {Object.keys(char.abilities).map(hability => (
          <View key={hability} style={styles.habilityContainer}>
            <Text style={styles.skillType}>{hability.charAt(0).toUpperCase() + hability.slice(1)}</Text>
            <SkillBar 
              value={
                (char.abilities[hability as keyof AbilitiesProps] - (char.abilities[hability as keyof AbilitiesProps]%2==0 ? 0 : 1))/2
              } 
            />
          
          </View>
        ))}

        <Text style={styles.infoTitle}>Filmes</Text>
        <FlatList
          data={char.movies}
          keyExtractor={(item) => String(item)}
          renderItem={(({ item }) => (
            <CardMovie imageUri={item} />
          ))}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 30 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 650,
  },
  gradientContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  nameContainer: {
    width: 200,
  },
  subtitle: {
    color: colors.white,
    fontFamily: fonts.khula.light,
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.khula.extraBold,
    fontSize: 40,
    lineHeight: 50,
  },
  characteristicsContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-around'
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  characteristicText: {
    color: colors.white,
    fontFamily: fonts.khula.light,
    marginTop: 12
  },
  content: {
    marginTop: 25,
    paddingHorizontal: 20
  },
  biography: {
    textAlign: "justify",
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.khula.regular
  },
  infoTitle: {
    fontSize: 24,
    fontFamily: fonts.khula.extraBold,
    color: colors.white,
    marginTop: 20,
    marginBottom: 15
  },
  habilityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  skillType: {
    color: colors.white,
    fontFamily: fonts.khula.regular
  },
});
