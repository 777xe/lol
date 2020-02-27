import Client from '@infosimples/node_two_captcha';

const decodingCaptha = async (googlekey, apiKey, url) => {
  const client = new Client(apiKey, {
    timeout: 300000,
    polling: 5000,
    throwErrors: false,
  });
  console.log('waiting for captcha... 300 seconds limit');
  let timer = 300;
  const intervalId = setInterval(() => {
    timer -= 5;
    console.log(`waiting for captcha... ${timer} secs left`);
  }, 5000);
  const response = await client.decodeRecaptchaV2({
    googlekey,
    pageurl: url,
  });
  clearInterval(intervalId);
  const balance = await client.balance();
  console.log(`2captcha balance: ${balance}`);
  return response.text;
};

export default decodingCaptha;
