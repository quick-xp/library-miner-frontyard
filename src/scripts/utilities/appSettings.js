'use strict';

/**
 * How to enable / disable logs in console logged with debug.js
 *
 * enable  - run in console -> debug.enable('*');
 * disable - run in console -> debug.disable();
 */

var appSettings = {};

/**
 * Helper method for detecting production enviroment
 *
 * @return {Boolean} - 'true' for production enviroment, 'false' for development
 */
appSettings.isProduction = function () {
    var host = window.location.hostname;

    if (host === 'localhost') {
        return false;
    }

    return true;
};

/**
 * Helper method for detecting development enviroment
 *
 * @return {Boolean} - 'false' for production enviroment, 'true' for development
 */
appSettings.isNotProduction = function () {
    return !appSettings.isProduction();
};

/**
 * Print version info on the page
 *
 * @type {Boolean}
 */
appSettings.renderVersionInfo = true;

module.exports = appSettings;
