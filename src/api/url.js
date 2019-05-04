const prefix = process.env.NODE_ENV === 'production' ? 'http://www.serjaime.xin:3000' : 'http://127.0.0.1:3000';
// const prefix = 'http://www.serjaime.xin:3000';

const BASE_URL = prefix + '/api';

const URL_PICTURE = prefix + '/img?url=';

export {
  BASE_URL,
  URL_PICTURE
}