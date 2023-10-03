import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import GlobalStyles from '../styles/GlobalStyles';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://dummyjson.com/todos')
            .then(response => {
                setTodos(response.data.todos);
                console.log('Current state:', todos); // Adicione esta linha
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);


    return (
        <View style={GlobalStyles.container}>
            <Text>Todo List</Text>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem key={item.id} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.todo}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )}
                />
            )}
        </View>
    );
};

export default TodoList;
