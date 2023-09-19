import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginBottom: 50,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    linkText: {
        color: '#007BFF',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default GlobalStyles;
