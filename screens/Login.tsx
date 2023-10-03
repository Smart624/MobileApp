import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Alert } from 'react-native';
import { useAuthentication } from '../hooks/useAuthentication';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { Button } from 'react-native-elements';

const Login: React.FC = () => {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, authenticate } = useAuthentication();

    const handleLogin = async () => {
        if (username && password) {
            await authenticate(username, password);
        } else {
            Alert.alert(t('error'), t('please_fill_all_fields'));
        }
    };

    return (
        <View style={styles.container}>
            <Logo />
            <Input placeholder="Usuário" value={username} onChangeText={setUsername} editable={!loading} />
            <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} editable={!loading} />
            <Button
                title="Login"
                onPress={handleLogin}
                loading={loading}
                disabled={loading}
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
    },
});

export default Login;
