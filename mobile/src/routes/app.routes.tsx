import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignIn from '../screens/SignIn';
import * as React from 'react';
import Payment from '../screens/Payment';
import SearchFlights from '../screens/SearchFlights';



function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name='signin'
                component={SignIn}
            />
            <Screen
                name='payment'
                component={Payment}
            />
            <Screen
                name='searchflights'
                component={SearchFlights}
            />


        </Navigator>
    );
}

export default AppRoutes;