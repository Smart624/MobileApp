
import { useState, useCallback } from 'react';
import ServiceFactory from '../factories/ServiceFactory';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TodoList: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const useAuthentication = () => {

  const navigation = useNavigation<NavigationProp>();

  const [loading, setLoading] = useState(false);
  const authService = ServiceFactory.createAuthenticationService();

  const authenticate = useCallback(async (username: string, password: string) => {
    setLoading(true);
    try {
      const message = await authService.authenticate(username, password);
      alert(message);
      navigation.navigate('Home'); // Redirecionar para Home
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [authService, navigation]); // Adicione navigation aqui

  return {
    loading,
    authenticate,
  };
};
