import { useState } from "react";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../Screens/Pokedex";
import PokemonDetail from "../Screens/PokemonDetail";
import { getBackgroundColor } from "../function";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import { AuthProvider, DialogProvider } from "../Providers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UseAuth } from "../Hooks";
import ShowTix from "../Screens/ShowTix";

const ticketingStack = createNativeStackNavigator();

export default function App() {
  const { logout, token } = UseAuth();
  return (
    <DialogProvider>
      <NavigationContainer>
        <ticketingStack.Navigator initialRouteName='Login'>
          {!token ? (
            <>
              <ticketingStack.Screen name={"Register"} component={SignUp} />
              <ticketingStack.Screen name={"Login"} component={SignIn} />
            </>
          ) : (
            <>
              <ticketingStack.Screen
                name={"Tickets"}
                component={ShowTix}
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
              {/* <ticketingStack.Screen
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
                    const [selected, SetSelected] = useState();

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
              /> */}
            </>
          )}
        </ticketingStack.Navigator>
      </NavigationContainer>
    </DialogProvider>
  );
}
