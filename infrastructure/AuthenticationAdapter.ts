import IAuthenticationService from "../services/IAuthenticationService";
import AuthenticationService from "../services/AuthenticationService";

class AuthenticationAdapter implements IAuthenticationService {
    private service = new AuthenticationService();

    authenticate(username: string, password: string): Promise<string> {
        return this.service.authenticate(username, password);
    }
}

export default AuthenticationAdapter;
