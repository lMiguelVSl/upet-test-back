export const validateUser = (user) => {
    if (user.name === '') return false;
    if (user.lastName === '') return false;
    if (!isValidEmail(user.email)) return false;
    if (!isValidPassword(user.password)) return false;
    return true;
}

const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidLength = password.length >= 8;

    return hasUppercase && hasLowercase && hasNumber && isValidLength;
}

