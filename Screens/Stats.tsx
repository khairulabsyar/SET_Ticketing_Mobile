import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../api";
import { firstLetter } from "../function";

interface Props {
  stats: Pokemon["stats"];
}

function Stats(props: Props) {
  return (
    <View style={styles.container}>
      {props.stats.map((stat: any, index: number) => (
        <>
          <View style={{ flexDirection: "column", margin: 5 }}>
            <Text style={styles.stat}>{firstLetter(stat.stat.name)}</Text>
            <View style={styles.progressBar}>
              <View
                style={{ backgroundColor: "#8BED4F", width: stat.base_stat }}
              />
            </View>
          </View>
        </>
      ))}
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  stat: {
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    width: 175,
    color: "green",
    backgroundColor: "yellow",
    overflow: "hidden",
    marginRight: 10,
    padding: 5,
    fontSize: 20,
    textAlign: "center",
  },
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: 175,
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
