const getLink = (serverNumber) => {
  switch (serverNumber) {
    case '1': {
      const url = 'https://signup.euw.leagueoflegends.com/en/signup/';
      const region = 'EUW1';
      return { url, region };
    }
    case '2': {
      const url = 'https://signup.eune.leagueoflegends.com/en/signup/';
      const region = 'EUN1';
      return { url, region };
    }
    case '3': {
      const url = 'https://signup.na.leagueoflegends.com/en/signup/';
      const region = 'NA1';
      return { url, region };
    }
    case '4': {
      const url = 'https://signup.br.leagueoflegends.com/pt/signup/index#/';
      const region = 'BR1';
      return { url, region };
    }
    case '5': {
      const url = 'https://signup.tr.leagueoflegends.com/tr/signup/index';
      const region = 'TR1';
      return { url, region };
    }
    case '6': {
      const url = 'https://signup.ru.leagueoflegends.com/ru/signup/index#/';
      const region = 'RU';
      return { url, region };
    }

    case '7': {
      const url = 'https://signup.oce.leagueoflegends.com/en/signup/index/';
      const region = 'OC1';
      return { url, region };
    }

    case '8': {
      const url = 'https://signup.lan.leagueoflegends.com/en/signup/index#/';
      const region = 'LA1';
      return { url, region };
    }
    case '9': {
      const url = 'https://signup.las.leagueoflegends.com/en/signup/index#/';
      const region = 'LA2';
      return { url, region };
    }
    default:
      throw new Error('Unknown server');
  }
};

export default getLink;
