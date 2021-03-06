'use strict';

var mServices = require('./_mServices'),
    debug = require('debug'),
    log = debug('Ctrls'),
    environment = require('../../data/environment.json'),
    loader = require('../../utilities/loader');

mServices
.factory('PopularProjectService', function ($resource) {

    var baseUrl = environment.API_BASE;

    return $resource(baseUrl + "/popular_projects.json", {}, {
        query: { method: 'GET', params: {} }
    });
});
