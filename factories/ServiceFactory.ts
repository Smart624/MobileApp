
import AuthenticationService from '../services/AuthenticationService';

class ServiceFactory {
    static createAuthenticationService(): AuthenticationService {
        return new AuthenticationService();
    }
}

export default ServiceFactory;
