'use strict';

var angular = require('angular'),
    ngTouch = require('angular-touch'),
    ngSanitize = require('angular-sanitize'),
    ngResource = require('angular-resource'),
    uiRouter = require('angular-ui-router'),
    mAnimations = require('./animations/_loader'),
    mCtrls = require('./controllers/_loader'),
    mServices = require('./services/_loader'),
    mFilters = require('./filters/_loader'),
    mContstants = require('./constants/_loader');

/*
 *  mDirectives = require('./directives/_loader'),
 */

/**
 * Register main angular app
 */

require('angular-bootstrap-npm');
require('updatemeta');

var dependencies = [
    ngTouch,
    ngSanitize,
    uiRouter,
    mAnimations,
    mCtrls,
    mServices,
    mFilters,
    mContstants,
    ngResource,
    'updateMeta',
    'ui.bootstrap'
];

angular
    .module('app', dependencies)
    .config(function($stateProvider, $locationProvider, $urlRouterProvider) {

        'ngInject';

        // Routingの定義
        $stateProvider
            .state('top', {
                url: '/',
                templateUrl: 'templates/views/top.html',
                controller: 'TopController'
            })
            .state('project_search_top', {
                url: '/project_search',
                templateUrl: 'templates/views/projectSearchTop.html',
                controller: 'ProjectSearchTopController'
            })
            .state('project_search_using', {
                url: '/project_search/:id',
                templateUrl: 'templates/views/projectSearchUsing.html',
                controller: 'ProjectSearchUsingController'
            })
            .state('project_search_name', {
                url: '/project_search_name/',
                templateUrl: 'templates/views/projectSearchUsing.html',
                controller: 'ProjectSearchUsingController'
            })
            .state('project_detail', {
                url: '/projects/:id',
                templateUrl: 'templates/views/projectDetail.html',
                controller: 'ProjectDetailController'
            })
            .state('popular_project', {
                url: '/popular_project',
                templateUrl: 'templates/views/popularProject.html',
                controller: 'PopularProjectController'
            })

        ;

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });
