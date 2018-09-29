var vodModule = angular.module('vod', ['ui.bootstrap']);
vodModule.controller('ListController', function($scope, $http) {
    $http.get('http://starlord.hackerearth.com/sureify/cokestudio').
        then(function(response) {
            //$scope.myInterval = 3000;
            $scope.slides = response.data;
            console.log(response.data);
            //$scope.items = response.data;
        });
        
    $scope.playvideo = function(url){
        var videoplayer = $("#videoplayer");
        //$("#videosrc").attr("src",url);
        //videoplayer.load();
        videoplayer[0].src = url;
        videoplayer[0].load();
        videoplayer[0].play();
        //alert("Video URL is "+url);
    };
});
