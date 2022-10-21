import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShowDevs from "../Screens/ShowDevs";
import ShowTix from "../Screens/ShowTix";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
          marginBottom: 15,
        },
      }}
    >
      <Tab.Screen name='Tickets' component={ShowTix} />
      <Tab.Screen name='Developers' component={ShowDevs} />
    </Tab.Navigator>
  );
};
export default BottomNavigator;
