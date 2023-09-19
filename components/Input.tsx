import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = React.memo(({ placeholder, ...props }) => {
    return <TextInput style={styles.input} placeholder={placeholder} {...props} />;
});

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
});

export default Input;
