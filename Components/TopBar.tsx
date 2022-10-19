import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

function TopBar({ state, navigation }: any) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route: any, index: any) => {
        const label = route.name;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          const isFocused = state.index === index;

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        return (
          <Pressable onPress={onPress} style={styles.button} key={index}>
            <Text style={styles.text}>{label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TopBar;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.23,
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    margin: 2,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
