'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope', '$firebase','$location', 'CommonProp', '$http', function($scope, $firebase, $location ,CommonProp, $http) {
    $scope.username = CommonProp.getUser();

   // $scope.username = CommonProp.getUser();

    if(!$scope.username){
        $location.path('/home');
    } 

    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com/Articles/");


    var sync = $firebase(firebaseObj.startAt($scope.username).endAt($scope.username));

    $scope.articles = sync.$asArray();
	console.log(sync);

    $scope.logout = function(){
    CommonProp.logoutUser();
};
    $(function(){
        var front = $('.Front'),
            others = ['Left2', 'Left', 'Right', 'Right2'];

        $('.Carousel').on('click', '.Items', function() {
            var $this = $(this);

            $.each(others, function(i, cl) {
                if ($this.hasClass(cl)) {
                    front.removeClass('Front').addClass(cl);
                    front = $this;
                    front.addClass('Front').removeClass(cl);
                }
            });
        });
    });


    // add classname to trigger background colour change
    var addNavBg = function(){
        if($(window).scrollTop() > 0) {
           $('.hero_wrap navbar').addClass('color_in');
        }
        //alert(1);
        console.log( $(window).scrollTop() );
    }

    addNavBg();

    $(window).on('scroll',function(){
        addNavBg();
        console.log( $(window).scrollTop() );
    });


    $scope.users = []; //declare an empty array
    $http.get('app/json/users.json').success(function(response){
        $scope.users = response;  //ajax request to fetch data into $scope.data
    });

        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchListings = '';     // set the default search/filter term

    var image = [
        'https://pgcpsmess.files.wordpress.com/2014/03/bald-eagle.jpg',
        'https://pgcpsmess.files.wordpress.com/2014/03/bald-eagle.jpg',
        'https://pgcpsmess.files.wordpress.com/2014/03/bald-eagle.jpg',
    ];

        // create the list
        $scope.raves = [

            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' }

            // { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            // { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            // { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            // { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' },
            // { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            // { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            // { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            // { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' },
            // { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            // { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            // { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            // { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' },
            // { icon: '', name: 'Cali Roll 1\nLocation 1\n' + 'This Friday', promoter: 'Promoter 1' },
            // { icon: '', name: 'Cali Roll 2, Location 2, Tomorrow', promoter: 'Promoter 2' },
            // { icon: '', name: 'Cali Roll 3, Location 3, Next Friday', promoter: 'Promoter 3'},
            // { icon: '', name: 'Cali Roll 4, Location 4, This Friday', promoter: 'Promoter 4' }
            // { icon: '', name: 'Cali Roll', spot: 'Location 1', something: 'This Friday', promoter: 'Promoter 1' },
            // { icon: image[1], name: 'Philly', spot: 'Location 2', something: 'This Saturday', promoter: 'Promoter 2' },
            // { icon: '', name: 'Tiger', spot: 'Location 3', something: 'May 9th - Friday', promoter: 'Promoter 3' },
            // { icon: '', name: 'Rainbow', spot: 'Location 4', something: 'May 10th - Bank Holiday', promoter: 'Promoter 4' }
        ];

    var section = window.location.pathname;
    if (section == "/blog") {
        $("#index").addClass("hide");
        $("#blog").removeClass("hide");
    }
    else if (section == "/projects") {
        $("#index").addClass("hide");
        $("#projects").removeClass("hide");
    }
    else if (section == "/contact") {
        $("#index").addClass("hide");
        $("#contact").removeClass("hide");
    }
    // onclick of one of the navigation buttons
    $( "a[data-hide]" ).on( "click", function() {
        $(window).scrollTop(0);
        var toHide = $(this).data("hide");
        var toShow = "#" + $(this).attr("href");
        var url = "/" + $(this).attr("href");
        if (url == "/index") {
            url = "/";
        }
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        var animationArray = ['zoomOutDown', 'zoomOutUp', 'zoomOutRight', 'zoomOutLeft', 'rollOut', 'slideOutUp', 'rotateOutDownRight', 'rotateOutUpRight', 'lightSpeedOut', 'bounceOutUp', 'rotateOutUpLeft', 'slideOutUp'];
        var animationName = animationArray[Math.floor(Math.random() * animationArray.length)];
        // var animationName = "zoomOutDown";

        $(toShow).removeClass("hide");
        $(toShow).css("z-index", "0");
        $(toHide).css("z-index", "9999");
        window.history.pushState(null, null, url);
        $(toHide).addClass("animated " + animationName).one(animationEnd, function() {

            $(toHide).addClass('hide').removeClass("animated " + animationName);

        });
        return false;
    });
    $('#post').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var post = button.data('post')
        var title = button.data('title')
        var modal = $(this)
        modal.find('.modal-title').text(title)
        modal.find('.modal-body').html(post)
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    })
    $('#send').on('click', function () {
        var $btn = $(this).button('loading')
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        $.get( "http://timothy.expert/sendmail.php", { name: name, email: email, subject: subject, message: message } )
            .done(function( data ) {
                eval(data);
            });
        return false;
    })
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });

}]);


