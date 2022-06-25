
//#support-ways with stopPropagation, but as it is not connected to specific element it flows
$(document).ready(function(){  
  $(".help-us").on("click",function(event) {
     $('#support-ways').toggle();
  $('#white_romb').toggle();
  });
  $('.help').on('click', function(event){
    event.stopPropagation();
  });
})
//function getHelp(){}
function currencyChoice() {
  $('#currency-choice').toggle();
}

function showRecentAccomodatios() {
  $('#last-seen-accomodations').toggle();
  $('#white_romb_resently_seen').toggle(); 
}

// move away the unlike hotel by not closing the window
$(document).ready(function(){ 
  $('.closing-icon').on('click', function(event){
    $(this).parents('.hotels').remove();
  });
  $('#last-seen-accomodations').on('click', function(event){
    event.stopPropagation();
  });
});

$(document).ready(function(){
  $(".register").on("click",function(){ //apearing of the register window
    $(".register-menu").fadeIn(1000);
    $(".register-container .shadow").show().animate({"opacity":"0.2"});
    showRegisterModal(); // - the button have to work already
  });
  $(".register-container .shadow").on("click",function(){ //removing the register windoe when clicking on outer area
    $(this).hide();
    $(".register-menu").hide();
  })
  $(".register-menu .register-now").on("click", showRegisterModal); //when clicking on sign in, show sign in 
  $(".register-menu .sign-in").on("click", showSignInModal); //when clicking on rehister, show register
});

$(document).ready(function(){
  $(".sign_in").on('click',function(){
    $(".register-menu").fadeIn(1000);
    $(".register-container .shadow").show().animate({"opacity":"0.2"});
    showSignInModal();
  })
   //$(".register-container .shadow").on("click",function(){ 
    //$(this).hide();
    //$(".register-menu").hide();
  $(".register-menu .register-now").on("click", showRegisterModal);  
  $(".register-menu .sign-in").on("click", showSignInModal); 
})

function showRegisterModal() {
  $(".register-menu .register-now").addClass("active");
  $(".register-menu .sign-in").removeClass("active");
  $(".choice-sign-in").hide();
  $(".choice-register").show();
}
function showSignInModal() {
  $(".register-menu .sign-in").addClass("active");
  $(".register-menu .register-now").removeClass("active");
  $(".choice-sign-in").show();
  $(".choice-register").hide();
}

