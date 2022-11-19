import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import * as React from 'react';
import AppRoutes from "./app.routes";
import SignIn from "../screens/SignIn";


function Routes() {
    const { usuario } = useAuth()
    return (
        <NavigationContainer>
            {usuario.name ?<AppRoutes/>:<SignIn/>}
        </NavigationContainer>
    );
}

export default Routes;