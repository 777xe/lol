import fetch from 'node-fetch';

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

  const apiUrl = 'https://signup-api.leagueoflegends.com/v1/accounts';
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
};

export default requestRiotSignup;
