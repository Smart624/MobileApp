import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import TodoList from '../screens/TodoList';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TodoList" component={TodoList} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
