import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../api";
import { firstLetter } from "../function";

interface Props {
  moves: Pokemon["moves"];
}

function Moves(props: Props) {
  return (
    <View style={styles.container}>
      {props.moves.slice(5, 10).map((move: any) => (
        <View style={styles.move}>
          <Text style={styles.text}>{firstLetter(move.move.name)}</Text>
        </View>
      ))}
    </View>
  );
}

export default Moves;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  move: {
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
