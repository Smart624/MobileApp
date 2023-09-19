
import { useState, useCallback } from 'react';
import ServiceFactory from '../factories/ServiceFactory';

export const useAuthentication = () => {
  const [loading, setLoading] = useState(false);
  const authService = ServiceFactory.createAuthenticationService();

  const authenticate = useCallback(async (username: string, password: string) => {
    setLoading(true);
    try {
      const message = await authService.authenticate(username, password);
      alert(message);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [authService]);

  return {
    loading,
    authenticate,
  };
};
