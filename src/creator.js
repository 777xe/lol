import generatePassword from 'password-generator';
import readlineSync from 'readline-sync';
import generateNick from './nameGen';
import decodingCaptha from './captcha';
import getLink from './servers';
import requestRiotSignup from './riotApi';
import saveAcc from './write';

const genAccount = () => {
  const username = generateNick();
  const password = generatePassword(10, false, /[0-9a-zA-Z]/);
  const email = `${username}@gmail.com`;
  return { username, password, email };
};

const getKeys = () => {
  let apiKey = ''; // 2captcha
  if (!apiKey) {
    apiKey = readlineSync.question('Enter your 2captcha API Key: ');
  }
  const googlekey = '6Lc3HAsUAAAAACsN7CgY9MMVxo2M09n_e4heJEiZ';
  return { googlekey, apiKey };
};

const getServerNumber = () => {
  console.log('Select Server from one of the following:\n');
  console.log('[1] EUW');
  console.log('[2] EUN');
  console.log('[3] NA');
  console.log('[4] BR');
  console.log('[5] TR');
  console.log('[6] RU');
  console.log('[7] OCE');
  console.log('[8] LAN');
  console.log('[9] LAS');
  const serverNumber = readlineSync.question('Enter the number: ');
  return serverNumber;
};

const mainThread = async () => {
  const { username, password, email } = genAccount();
  const { googlekey, apiKey } = getKeys();
  const serverNumber = getServerNumber();
  const { url, region } = getLink(serverNumber);
  const accountInfo = `${region}:${username}:${password}:${email}`;
  console.log(`Generated Account: ${accountInfo}`);
  const token = await decodingCaptha(googlekey, apiKey, url);
  const res = await requestRiotSignup(token, username, password, email, region);
  if (res === 'OK') saveAcc(accountInfo);
  console.log('Account Created! Check generatedAccounts.txt');
};

// try {
//   mainThread();
// } catch (e) {
//   console.log(`fuck this shit: ${e}`);
// }
export default mainThread;
