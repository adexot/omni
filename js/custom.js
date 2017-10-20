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
    
});