import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import GlobalStyles from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../hooks/useAuthentication';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface TodoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

const Home: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [nextTodoId, setNextTodoId] = useState<number>(1);  // Novo estado para manter o próximo ID único
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<HomeScreenNavigationProp>();

    useEffect(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/todos')
            .then(response => {
                setTodos(response.data.todos);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const addTodo = () => {
        const newTodoItem: TodoItem = {
            id: nextTodoId,  // Use o próximo ID exclusivo
            todo: newTodo,
            completed: false,
            userId: 1  // Simulado
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
        setNextTodoId(nextTodoId + 1);  // Incrementar o próximo ID exclusivo
    };

    const updateTodo = (id: number) => {
        // Simulate a PUT request
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        // Simulate a DELETE request
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <View style={GlobalStyles.container}>
            <Text>Home Screen</Text>
            <TextInput
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder="New Todo"
            />
            <Button title="Add Todo" onPress={addTodo} />
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.todo}</Text>
                            <TouchableOpacity onPress={() => updateTodo(item.id)}>
                                <Text>Toggle Complete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
            <Button title="Go to Todo List" onPress={() => navigation.navigate('TodoList')} />
        </View>
    );
};

export default Home;
