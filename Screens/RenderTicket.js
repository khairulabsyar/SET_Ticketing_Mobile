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
import { getBackgroundColor } from "../function";

const WIDTH = Dimensions.get("window").height;

export const RenderTicket = ({ item, navigation }) => {
  const opacity = new Animated.Value(0.2);
  const scale = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
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
        navigation.navigate("Tickets");
      });
    });
  };

  return (
    // {item.map((item)=>(
    <Animated.View style={{ opacity, transform: [{ scale }] }}>
      <Pressable
        onPress={onPress}
        style={[styles.pokemonView, { width: WIDTH * 0.22 }]}
      >
        {/* Intro */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[{ fontWeight: "bold" }, styles.textName]}>
            Ticket ID:{" "}
          </Text>
          <Text style={[{ fontWeight: "bold" }, styles.textName]}>
            {item.id}
          </Text>
        </View>

        {/* Title */}
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1DA1F2", fontWeight: "bold" }}>Title:</Text>
          <Text style={styles.textName}>{item.title}</Text>
        </View>

        {/* Developer */}
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1DA1F2", fontWeight: "bold" }}>
            Assign to:
          </Text>
          <Text style={styles.textName}>
            {item.developer ? item.developer : "Unassigned"}
          </Text>
        </View>

        {/* Description */}
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1DA1F2", fontWeight: "bold" }}>
            Description:{" "}
          </Text>
          <Text style={styles.textName}>{item.description}</Text>
        </View>

        {/* Category */}
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1DA1F2", fontWeight: "bold" }}>
            Category:
          </Text>
          <Text style={styles.textName}>{item.category}</Text>
        </View>

        {/* Status */}
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#1DA1F2", fontWeight: "bold" }}>Status:</Text>
          <Text
            style={[
              styles.textName,
              { color: getBackgroundColor(item.status) },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
    // ))}
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
    height: 400,
    padding: 10,
    margin: 5,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "flex-start",
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
  TicketContainer: {
    backgroundColor: "#cbced1",
    width: 160,
    height: 250,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 15,
    marginTop: 15,
    padding: 10,
    justifyContent: "center",
    marginLeft: 7,
  },
  container: {
    backgroundColor: "#ecf0f3",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flexDirection: "row",
    backgroundColor: "#cbced1",
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    borderRadius: 15,
    alignItems: "center",
  },
});
