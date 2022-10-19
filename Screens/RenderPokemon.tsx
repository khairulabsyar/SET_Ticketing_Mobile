import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { firstLetter } from "../function";
import { Pokemon } from "../api";

const WIDTH = Dimensions.get("window").height;

export const RenderPokemon = ({
  item,
  navigation,
}: {
  item: Pokemon;
  navigation: any;
}) => {
  const opacity = new Animated.Value(0.2);
  const scale = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  const onPress = () => {
    Animated.timing(scale, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate("PokemonDetail", { pokemon: item });
      });
    });
  };

  return (
    <Animated.View style={{ opacity, transform: [{ scale }] }}>
      <Pressable
        onPress={onPress}
        style={[styles.pokemonView, { width: WIDTH * 0.2 }]}
      >
        <Text style={styles.textName}>{item.name.toUpperCase()}</Text>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 150, height: 150 }}
        />
        <View>
          {item.types.map((type: any) => (
            <View style={styles.type} key={type.slot}>
              <Text>{firstLetter(type.type.name)}</Text>
            </View>
          ))}
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
