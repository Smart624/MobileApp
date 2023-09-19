
export const isValidUsername = (username: string): boolean => {
    return /^[a-zA-Z0-9_.-]*$/.test(username);
};

export const isValidPassword = (password: string): boolean => {
    return password.length > 0;
};
