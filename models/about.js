'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const about = {
  about: new JsonStore('./models/about.json', { employees: [] }),
  collection: 'employees',

  getAppInfo() {
    return this.about.findAll(this.collection);
  }
};

export default about;