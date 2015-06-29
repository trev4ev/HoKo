$(document).ready(function(){
});

$('#a').click(function(){
    $('html, body').animate({
    scrollTop: $("#white").offset().top
}, 1000);
});

$('#p').click(function(){
    $('html, body').animate({
    scrollTop: $("#white2").offset().top
}, 1000);
});

$('#c').click(function(){
    $('html, body').animate({
    scrollTop: $("#black3").offset().top
}, 1000);
});

$('#a').hover(function(){
    $('#a').animate({color: '#8ff8ff'});
}, function(){
    $('#a').animate({color: 'white'});
});

$('#p').hover(function(){
    $('#p').animate({color: '#8ff8ff'});
}, function(){
    $('#p').animate({color: 'white'});
});

$('#c').hover(function(){
    $('#c').animate({color: '#8ff8ff'});
}, function(){
    $('#c').animate({color: 'white'});
});

$('#email').hover(function(){
    $('#email').animate({fontSize: '45px'});
}, function(){
    $('#email').animate({fontSize: '40px'});
});
