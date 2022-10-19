import React from "react";
import { Abilities, Moves, Stats, About } from "../Screens/index";
import TopBar from "../Components/TopBar";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabParamList } from "../Navigation/types";
import { Pokemon } from "../api";
import { View } from "react-native";

const Tab = createMaterialTopTabNavigator<TabParamList>();

function DetailNavigator(props: any) {
  return (
    <View>
      <Tab.Navigator tabBar={(props) => <TopBar {...props} />}>
        <Tab.Screen name='Abilities'>
          {() => <Abilities abilities={props.abilities} />}
        </Tab.Screen>
        <Tab.Screen name='Stats'>
          {() => <Stats stats={props.stats} />}
        </Tab.Screen>
        <Tab.Screen name='Moves'>
          {() => <Moves moves={props.moves} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}

export default DetailNavigator;
