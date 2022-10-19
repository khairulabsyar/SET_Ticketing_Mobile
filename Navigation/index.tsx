import { useState } from "react";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../Screens/Pokedex";
import PokemonDetail from "../Screens/PokemonDetail";
import { PokemonStackParamList } from "./types";
import { getBackgroundColor } from "../function";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import { AuthProvider, DialogProvider } from "../Providers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UseAuth } from "../Hooks";

const PokemonStack = createNativeStackNavigator<PokemonStackParamList>();

export default function App() {
  const { logout, token } = UseAuth();
  return (
    <DialogProvider>
      <NavigationContainer>
        <PokemonStack.Navigator initialRouteName='Login'>
          {!token ? (
            <>
              <PokemonStack.Screen name={"Register"} component={SignUp} />
              <PokemonStack.Screen name={"Login"} component={SignIn} />
            </>
          ) : (
            <>
              <PokemonStack.Screen
                name={"Pokedex"}
                component={Pokedex}
                options={{
                  headerRight: () => {
                    return (
                      <SimpleLineIcons
                        onPress={() => logout()}
                        name='logout'
                        size={24}
                        color={"black"}
                      />
                    );
                  },
                }}
              />
              <PokemonStack.Screen
                name={"PokemonDetail"}
                component={PokemonDetail}
                options={({ navigation, route }) => ({
                  title: route.params.pokemon.name.toUpperCase(),
                  // title: "Pokemon Detail",
                  headerStyle: {
                    backgroundColor: getBackgroundColor(
                      route.params.pokemon.types[0].type.name
                    ),
                  },
                  headerLeft: () => (
                    <Entypo
                      onPress={() => navigation.goBack()}
                      name='chevron-left'
                      size={24}
                      color='black'
                    />
                  ),
                  headerRight: () => {
                    const [selected, SetSelected] = useState<boolean>();

                    return (
                      <Entypo
                        onPress={() => SetSelected(!selected)}
                        name={selected ? "heart" : "heart-outlined"}
                        size={24}
                        color={selected ? "red" : "black"}
                      />
                    );
                  },
                })}
              />
            </>
          )}
        </PokemonStack.Navigator>
      </NavigationContainer>
    </DialogProvider>
  );
}
