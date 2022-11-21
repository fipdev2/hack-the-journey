import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "../screens/SignIn";
import * as React from "react";
import Payment from "../screens/Payment";
import SearchFlights from "../screens/SearchFlights";
import FlightConfirm from "../screens/FlightConfirm";
import MetaGuide from "../screens/MetaGuide";
import Airport from "../screens/Airport";
import ExploreFrance from "../screens/ExploreFrance";
import AvailableFlights from "../screens/AvailableFlights";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import ExploreJapan from "../screens/ExploreJapan";

function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { colors, sizes } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgba(127, 180, 228, 0.34)",
          borderStyle: "solid",
          borderTopWidth: 1,
          borderTopColor: "rgba(255, 255, 255, 0.2)",
          height: 60,
        },
        tabBarItemStyle: {
          position: "relative",
          top: Platform.OS === "ios" ? -10 : 0,
        },
      }}
    >
      <Screen
        name="metaguide"
        component={MetaGuide}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />

      <Screen
        name="airport"
        component={Airport}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <MaterialIcons name="folder" size={size} color={color} />
            ) : (
              <MaterialIcons name="folder-open" size={size} color={color} />
            ),
        }}
      />

      <Screen
        name="payment"
        component={Payment}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="searchflights"
        component={SearchFlights}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="flightconfirm"
        component={FlightConfirm}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="explorefrance"
        component={ExploreFrance}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="explorejapan"
        component={ExploreJapan}
        options={{
          tabBarButton: () => null,
        }}
      />
      <Screen
        name="availableflights"
        component={AvailableFlights}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
}

export default AppRoutes;
