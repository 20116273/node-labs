'use strict';

import logger from "../utils/logger.js";
import aboutInfo from "../models/about.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "Playlist App About",
      employees: aboutInfo.getAppInfo()
    };
    
    response.render('about', viewData);
  },
};

export default about;