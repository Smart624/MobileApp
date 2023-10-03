import { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
}

export const useFetchTodos = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Todo[] | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);

        axios.get('https://dummyjson.com/todos')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return { loading, data, error };
};
