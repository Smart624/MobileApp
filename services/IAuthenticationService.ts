interface IAuthenticationService {
    authenticate(username: string, password: string): Promise<string>;
}

export default IAuthenticationService;
