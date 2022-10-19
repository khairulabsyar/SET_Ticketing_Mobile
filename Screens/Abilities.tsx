import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../api";
import { firstLetter } from "../function";

interface Props {
  abilities: Pokemon["abilities"];
}

function Abilities(props: Props) {
  return (
    <View style={styles.container}>
      {props.abilities.map((ability: any, index: number) => (
        <View style={styles.ability} key={index}>
          <Text style={styles.text}>{firstLetter(ability.ability.name)}</Text>
        </View>
      ))}
    </View>
  );
}

export default Abilities;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  ability: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 200,
    margin: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 20,
    color: "green",
  },
});
