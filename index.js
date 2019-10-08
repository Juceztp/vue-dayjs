(function () {
  /**
    * Install plugin
     * @param Vue
     * @param dayjs
  */

  function plugin(Vue, dayjs) {

    if (plugin.installed) {
      return;
    }
    plugin.installed = true;

    if (!dayjs) {
        console.error("You have to install dayjs");
        return;
    }

    Vue.dayjs = dayjs;

    Object.defineProperties(Vue.prototype, {
      dayjs: {
        get() {
          return dayjs;
        }
      },
      $date: {
        get() {
          return dayjs;
        }
      }
    });

  }

  if (typeof exports === "object") {
    module.exports = plugin;
  } else if (typeof define === "function" && define.amd) {
    define([], function(){ return plugin; });
  } else if (window.Vue && window.dayjs) {
    Vue.use(plugin, window.dayjs);
  }

})();