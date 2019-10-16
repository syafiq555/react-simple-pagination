import { API_URL } from '../constants';

export default class User {
  constructor() {
    this.API_URL = API_URL;
  }

  async get() {
    return fetch(this.API_URL);
  }
}
