$(document).ready(function(){
    $('.mobile').click(function(){
        $('.mobile-menu').show();
    });
    $('#close-menu').click(function(){
        $('.mobile-menu').hide();
    });
    $('.customers').mouseover(function(){
        $('.customer-button').show();
    });
    $('.customers').mouseout(function(){
        $('.customer-button').hide();
    });

    // URL style
    var url = document.location.href.split('/');
    var pattern = stripUrl(url);   
    $('nav div ul li a').each(function(){
        var refLocation = $(this).attr('data-text');
        //if the ref location has an s affter it
        var refLocations = $(this).attr('data-text') + 's';
        var v = pattern.test(refLocation);
        var u = pattern.test(refLocations);
        if('/' + pattern ==  refLocation  || v || u){
            $(this).addClass('active');
        }
    });

    function stripUrl(url){
        var urlLength = url.length;
        var fragment = url[urlLength-1];
        var key = fragment.split('.');
        var pattern = new RegExp(key[0]);
        return pattern;
    }
});