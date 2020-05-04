$(function(){
    
    
    $("nav>ul>li:eq(1),.main_btn, .main_btna").click(function(){
        $('.overlay').show('slow');
        $('.modal').slideDown('slow');
    });

    $('.modal').find('span').click(function(){
        $('.overlay').hide('slow');
        $('.modal').hide('slow');
    });
    
});