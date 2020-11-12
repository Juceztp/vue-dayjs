/*!
 * vue-dayjs
 * Copyright(c) 2019 Julio Peña
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

const dayjs = require('dayjs');

export default {
  /**
    * Vue
    * @param {Vue} Vue
  */
  install: function (Vue) {
    Object.defineProperties(Vue.prototype, {
      $dayjs: {
        get: function() {
          return dayjs;
        },
      },
      $date: {
        get: function() {
          return dayjs;
        },
      }
    });
    Vue.dayjs = dayjs;
  }
};
