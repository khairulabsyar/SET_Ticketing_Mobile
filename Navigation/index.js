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
import BottomNavigator from "./BottomNavigator";
import ShowDevs from "../Screens/ShowDevs";

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
              {/* <ticketingStack.Screen
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
              <ticketingStack.Screen
                name={"Developers"}
                component={ShowDevs}
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
              /> */}
              <ticketingStack.Screen
                name={"Ticketing System"}
                component={BottomNavigator}
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
            </>
          )}
        </ticketingStack.Navigator>
      </NavigationContainer>
    </DialogProvider>
  );
}
