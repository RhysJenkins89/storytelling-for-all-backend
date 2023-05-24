'use strict';

/**
 * intro-text service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intro-text.intro-text');
