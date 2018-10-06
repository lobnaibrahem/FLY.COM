$('document').ready(function(){
    
        $("#spin .spinner").fadeOut(50 , function(){
        $("#spin").fadeOut(50 , function(){
        
        
    $("body").css("overflow","auto")    
    })
    } )
    $('.spin').css('width',window.innerWidth)
    $('.spin').css('width',window.innerHeight)
})
$("#btn-signup").click(function()  
{    
    $(".form-a").hide() 
    $(".form-b").show()
})
$("#btn-login").click(function()  
{    
    $(".form-a").show() 
    $(".form-b").hide()
})
$('.outer').click(function()
{
    $('.bt').show()
})

var typed = new Typed('.title', {
    strings: ["Birthday card ", "Wedding card","Invtation card","logos","flyers",],
    typeSpeed: 50,
    startDelay: 50,
   backSpeed: 50,
    backDelay: 1000,
    loop: true,
  loopCount: Infinity,
});

