import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { firstLetter } from "../function";
import { getBackgroundColor } from "../function";
import DetailNavigator from "../Navigation/DetailNavigator";
import { PokemonStackParamList } from "../Navigation/types";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

type Props = NativeStackScreenProps<PokemonStackParamList, "PokemonDetail">;

function PokemonDetail(props: Props) {
  const pokemon = props.route.params.pokemon;

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <LinearGradient
        colors={[
          getBackgroundColor(pokemon?.types[0].type.name),
          getBackgroundColor(
            pokemon?.types[1]?.type.name
              ? pokemon?.types[1]?.type.name
              : pokemon?.types[0].type.name
          ),
        ]}
        style={styles.background}
      >
        {/* <Text style={styles.textName}>{pokemon?.name.toUpperCase()}</Text> */}
        {/* Types */}
        <View style={{ flexDirection: "row" }}>
          {pokemon.types.map((type: any) => (
            <View
              style={[
                {
                  backgroundColor: getBackgroundColor(type.type.name),
                },
                styles.type,
              ]}
              key={type.slot}
            >
              <Text>{firstLetter(type.type.name)}</Text>
            </View>
          ))}
        </View>

        <Image
          source={{ uri: pokemon.image }}
          style={{ width: WIDTH, height: HEIGHT * 0.3, resizeMode: "contain" }}
        />
        <View style={styles.navigator}>
          <DetailNavigator {...pokemon} />
        </View>
      </LinearGradient>
    </View>
  );
}

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  background: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  type: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  textName: {
    color: "black",
    fontSize: 30,
  },
  detailTab: {
    backgroundColor: "red",
  },
  navigator: {
    height: "58%",
  },
});
