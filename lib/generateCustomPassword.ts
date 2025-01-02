export const generateCustomPassword = (
    lengthPassword: number,
    mayus: boolean,
    minus: boolean,
    number: boolean,
    specialCharacter: boolean,
) => {

    const mayusCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusCharset = "abcdefghijklmnopqrstuvwxyz";
    const numberCharset = "0123456789";
    const specialCharset = "!@#$%^&*()_+{}[]:;'<>,./?";

    let charset = "";
    if (mayus) charset += mayusCharset;
    if (minus) charset += minusCharset;
    if (number) charset += numberCharset;
    if (specialCharacter) charset += specialCharset;

    let password = "";
    if (mayus)
        password += mayusCharset.charAt(Math.floor(Math.random() * mayusCharset.length));

    if (minus)
        password += minusCharset.charAt(Math.floor(Math.random() * minusCharset.length));

    if (number)
        password += numberCharset.charAt(Math.floor(Math.random() * numberCharset.length));

    if (specialCharacter)
        password += specialCharset.charAt(Math.floor(Math.random() * specialCharset.length));

    for (let i = password.length; i < lengthPassword; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    return password;
}