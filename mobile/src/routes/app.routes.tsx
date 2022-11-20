import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignIn from '../screens/SignIn';
import * as React from 'react';
import Payment from '../screens/Payment';
import SearchFlights from '../screens/SearchFlights';
import FlightConfirm from '../screens/FlightConfirm';
import MetaGuide from '../screens/MetaGuide';
import Airport from '../screens/Airport';
import ExploreFrance from '../screens/ExploreFrance';
import AvailableFlights from '../screens/AvailableFlights';



function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name='metaguide'
                component={MetaGuide}
            />

            <Screen
                name='airport'
                component={Airport}

            />

            <Screen
                name='payment'
                component={Payment}
                options={{
                    tabBarButton: () => null
                }}
            />
            <Screen
                name='searchflights'
                component={SearchFlights}
                options={{
                    tabBarButton: () => null
                }}
            />
            <Screen
                name='flightconfirm'
                component={FlightConfirm}
                options={{
                    tabBarButton: () => null
                }}
            />
            <Screen
                name='explorefrance'
                component={ExploreFrance}
                options={{
                    tabBarButton: () => null
                }}

            />
            <Screen
                name='availableflights'
                component={AvailableFlights}
                options={{
                    tabBarButton: () => null
                }}

            />


        </Navigator>
    );
}

export default AppRoutes;