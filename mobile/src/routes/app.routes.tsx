import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignIn from '../screens/SignIn';
import * as React from 'react';
import Payment from '../screens/Payment';



function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <Navigator
        screenOptions={{
            headerShown:false
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

        </Navigator>
    );
}

export default AppRoutes;