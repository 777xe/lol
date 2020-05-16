import generatePassword from './passwordGen';
import generateNick from './nameGen';
import solveCaptcha from './captcha2';
import requestRiotSignup from './riotApi';
import getRandomEmailMask from './getRandomEmailMask';

const genAccountData = async (
  emailmask,
  isCheckedEmail,
  usernameMinLength,
  usernameMaxLength,
  passwordLength,
) => {
  const generatedUsername = generateNick(usernameMinLength, usernameMaxLength);
  const generatedPassword = generatePassword(passwordLength);
  const emailMask = isCheckedEmail ? await getRandomEmailMask() : emailmask;
  const generatedEmail = `${generatedUsername}${emailMask}`;
  return {
    username: generatedUsername,
    password: generatedPassword,
    email: generatedEmail,
  };
};

const registerAccount = async (
  server,
  dateOfBirth,
  emailmask,
  isCheckedEmail,
  googlekey,
  apikey,
  url,
  region,
  usernameMinLength,
  usernameMaxLength,
  passwordLength,
  useProxy,
  proxyList,
) => {
  const { username, password, email } = await genAccountData(
    emailmask,
    isCheckedEmail,
    usernameMinLength,
    usernameMaxLength,
    passwordLength,
  );
  const token = await solveCaptcha(apikey, googlekey, url);
  const res = await requestRiotSignup(
    token,
    username,
    password,
    email,
    region,
    dateOfBirth,
    useProxy,
    proxyList,
  );
  const { response, proxy } = res;
  if (response.status === 200) {
    return `${proxy}${server}:${username}:${password}:${email} SUCCESS!`;
  }
  return `${proxy}${server}:${username}:${password}:${email} ERROR: ${JSON.stringify(
    response.fields,
  )}`;
};

export default registerAccount;
