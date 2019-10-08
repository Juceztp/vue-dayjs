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
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $dayjs: {
        get() {
          return dayjs;
        },
      },
      $date: {
        get() {
          return dayjs;
        },
      }
    });
    Vue.dayjs = dayjs;
  }
};