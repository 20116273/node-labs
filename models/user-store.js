'use strict';

import { response } from 'express';
import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const userStore = {

  store: new JsonStore('./models/user-store.json', { users: [] }),
  collection: 'users',

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  getUserById(id) {
    return this.store.findOneBy(this.collection, (user => user.id === id));
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, (user => user.email === email));
  },

  async addUser(user, picture, response) {
    try {
      user.picture = await this.store.addToCloudinary(picture);
      this.store.addCollection(this.collection, user);
      response();
    } catch (error) {
      logger.error("Error processing user: ", error);
      response(error);
    }
  },

};

export default userStore;
