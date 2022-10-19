import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { getData, Pokemon } from "../api";
import { SafeAreaView } from "react-native";
import { PokemonStackParamList } from "../Navigation/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RenderPokemon } from "./RenderPokemon";
import DetailNavigator from "../Navigation/DetailNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowTix from "./ShowTix";
import CreateTix from "./CreateTix";

type Props = NativeStackScreenProps<PokemonStackParamList, "Pokedex">;
const Tab = createBottomTabNavigator();

function Pokedex(props: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemonList = async () => {
    const res = await getData();
    if (res?.status === 200) {
      setPokemons(res.data);
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const renderItem = ({ item, index }: { item: Pokemon; index: number }) => (
    <RenderPokemon item={item} navigation={props.navigation} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen name='Tickets' component={ShowTix} />
      {/* <Tab.Screen name='Create Ticket' component={CreateTix} /> */}
    </Tab.Navigator>
  );
}

export default Pokedex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  list: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  textName: {
    color: "white",
    fontSize: 20,
  },
  pokemonView: {
    borderWidth: 1,
    borderColor: "red",
    height: 250,
    padding: 5,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  type: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    margin: 2,
  },
});
