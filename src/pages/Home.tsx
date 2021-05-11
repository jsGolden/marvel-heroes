import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { ListRow } from "../components/ListRow";
import { Load } from "../components/Load";

import { getChars } from "../services/getChars";

import { primaryColors } from "../styles/colors";
import fonts from "../styles/fonts";
import { ItemProps } from "../types";

import { 
  MarvelIcon,
  AlienIcon,
  AntiHero,
  HeroIcon,
  HumanIcon,
  VillainIcon
} from '../assets/icons/index';


interface iconTypesProps {
  type: string;
  colors: string[];
  image: (props: SvgProps) => JSX.Element;
};

const iconTypes: iconTypesProps[] = [
  { colors: ["#005bea", "#00c6fb"], image: AlienIcon, type: "aliens" },
  { colors: ["#ed1d24", "#ed1f69"], image: AntiHero, type: "antiHeroes" },
  { colors: ["#B224EF", "#7579FF"], image: HeroIcon, type: "heroes" },
  { colors: ["#0BA360", "#3CBA92"], image: VillainIcon, type: "villains" },
  { colors: ["#FF7EB3", "#FF758C"], image: HumanIcon, type: "humans" }
];

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [apiResponses, setApiResponses] = useState<ItemProps[]>([]);
  const [filteredChars, setFilteredChars] = useState<ItemProps[]>([]);

  const [activeType, setActiveType] = useState("all");

  useEffect(() => {
    async function fetchChars() {
      const requestedChars = await getChars();
      setApiResponses(requestedChars);
      setFilteredChars(requestedChars);
      setIsLoading(false);
    }

    fetchChars();
  }, []);

  function filterTypes(type: string) {
    if(type === "all") {
      setFilteredChars(apiResponses);
      return;
    }
    const filteredByType = apiResponses.filter((item) => item.slug === type);
    setFilteredChars(filteredByType);
  }

  function handleTypePress(type: string) {
    if(type === activeType) {
      type = "all";
    }
    setActiveType(type);
    filterTypes(type);
  }

  if (isLoading) return <Load />;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <MarvelIcon fill={primaryColors.red} />
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.subtitle}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.title}>Escolha seu personagem</Text>
        </View>

        <View style={styles.typesContainer}>
          <FlatList 
            data={iconTypes}
            keyExtractor={(item) => String(item.type)}
            renderItem={({ item }) => {
              const TypeIcon = item.image;
              return (
                <TouchableOpacity 
                  style={{ marginRight: 10 }} 
                  activeOpacity={0.5}
                  onPress={() => handleTypePress(item.type)}
                >
                  <LinearGradient 
                    colors={item.colors} 
                    style={[
                      styles.typeButton,
                      (activeType !== item.type) && styles.typeButtonDesactived
                    ]}
                  >
                    <TypeIcon fill="#fff" width={32} height={32} />
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.rowsContainer}>
          {filteredChars.map((response) => (
            <ListRow
              title={response.title}
              key={response.slug}
              items={response.items}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 24,
  },
  welcomeContainer: {
    marginTop: 40,
  },
  typesContainer: {
    marginTop: 30,
  },
  typeButton: {
    borderRadius: 50,
    padding: 15,
    opacity: 1
  },
  typeButtonDesactived: {
    borderRadius: 50,
    padding: 15,
    opacity: 0.7
  },
  subtitle: {
    fontFamily: fonts.khula.bold,
    color: primaryColors.grey,
    fontSize: 14,
    marginBottom: 15,
  },
  title: {
    fontFamily: fonts.khula.extraBold,
    color: primaryColors.dark,
    fontSize: 32,
    lineHeight: 40,
  },
  rowsContainer: {
    marginTop: 30,
  },
});
