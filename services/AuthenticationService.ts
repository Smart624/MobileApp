
import { isValidUsername, isValidPassword } from '../utils/validators';

class AuthenticationService {
    async authenticate(username: string, password: string): Promise<string> {
        if (!isValidUsername(username) || !isValidPassword(password)) {
            throw new Error('Invalid input');
        }

        if (username === 'admin' && password === '1234') {
            return 'Login realizado com sucesso';
        } else {
            throw new Error('Login falhou');
        }
    }
}

export default AuthenticationService;
