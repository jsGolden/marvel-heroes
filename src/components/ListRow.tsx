import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { primaryColors } from "../styles/colors";
import fonts from "../styles/fonts";
import { CharProps } from "../types";
import { PrimaryCardHero } from "./PrimaryCardHero";

interface ListRowProps {
  title: string;
  items: CharProps[];
}

export function ListRow({ title, items }: ListRowProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => String(item.name)}
        renderItem={({ item }) => (
            <PrimaryCardHero 
              char={item}
            />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        marginVertical: 15
    },
    header: {
        marginBottom: 16,
    },
    title: {
        color: primaryColors.red,
        fontFamily: fonts.khula.extraBold,
        fontSize: 18
    }
});
