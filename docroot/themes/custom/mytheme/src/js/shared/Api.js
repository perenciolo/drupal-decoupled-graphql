import axios from 'axios';

export default axios.create({
  baseURL: 'https://d8graphql.lndo.site/graphql',
  responseType: 'json'
});
