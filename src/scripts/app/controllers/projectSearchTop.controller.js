'use strict';

var mCtrls = require('./_mCtrls'),
    debug = require('debug'),
    log = debug('Ctrls'),
    loader = require('../../utilities/loader');

mCtrls
.controller('ProjectSearchTopController',
            ['$scope', '$location', '$stateParams', 'ProjectSearchService', 'Constants',
                function ($scope, $location, $stateParams, ProjectSearchService, Constants) {

    // プロジェクト検索 (ライブラリから検索)
    $scope.projectTypeId = Constants.ProjectType.library;
    $scope.search = function() {
        $scope.loading = true;

        $location.search({q: $scope.searchKeyword, page: $scope.currentPage});

        ProjectSearchService.query({
            page: $scope.currentPage, per_page: 10, full_name: $scope.searchKeyword,
            project_type_id: $scope.projectTypeId
        }, function(response) {
            $scope.loading = false;
            $scope.totalCount = response.total_count;
            $scope.results = response;
        });
    };

    var initialize = function() {
        var searchKeyword = $location.search()["q"];
        $scope.currentPage = $location.search()["page"];

        if (searchKeyword) {
            $scope.searchKeyword = searchKeyword;
            $scope.totalCount = Number.MAX_VALUE; // Pageが常に1に戻ってしまう問題回避
        }
        $scope.search();
    };
    initialize();
}]);
