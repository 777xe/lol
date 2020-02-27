import axios from 'axios';

const requestRiotSignup = async (token, username, password, email, region) => {
  const requestBody = {
    username,
    password,
    confirm_password: password,
    date_of_birth: '2000-01-01',
    email,
    tou_agree: true,
    newsletter: false,
    region,
    campaign: 'league_of_legends',
    locale: 'en',
    token: `Captcha ${token}`,
  };
  const headers = { 'Content-Type': 'application/json' };
  const apiUrl = 'https://signup-api.leagueoflegends.com/v1/accounts';
  const jsonData = JSON.stringify(requestBody);
  const response = await axios.post(apiUrl, jsonData, { headers });
  return response.statusText;
};

export default requestRiotSignup;
