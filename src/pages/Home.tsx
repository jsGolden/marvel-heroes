import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import MarvelIcon from "../assets/icons/MarvelIcon";

import { primaryColors } from "../styles/colors";
import fonts from "../styles/fonts";
import { ListRow } from "../components/ListRow";
import { ScrollView } from "react-native-gesture-handler";
import { Load } from "../components/Load";
import { getChars } from "../services/getChars";
import { ItemProps } from "../types";



export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponses, setApiResponses] = useState<ItemProps[]>([]);

  useEffect(() => {
    async function fetchChars() {
        const requestedChars = await getChars();
        setApiResponses(requestedChars);
        setIsLoading(false);
    }

    fetchChars();
  }, []);

  if (isLoading) return <Load />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MarvelIcon fill={primaryColors.red} />
      </View>

      <View style={styles.content}>
        <View style={styles.welcome}>
          <Text style={styles.subtitle}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.title}>Escolha seu personagem</Text>
        </View>

        <View style={styles.rows}>
            {apiResponses.map(response => (
                <ListRow title={response.title} key={response.slug} items={response.items} />
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
  welcome: {
    marginTop: 40,
  },
  subtitle: {
    fontFamily: fonts.khula.bold,
    color: primaryColors.grey,
    fontSize: 14,
  },
  title: {
    fontFamily: fonts.khula.extraBold,
    color: primaryColors.dark,
    fontSize: 32,
    lineHeight: 40,
  },
  rows: {
    marginTop: 30,
  },
});
