//Home

var TIMEOUT = 7000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}

$(document).ready(function(){
  $('#cdsearch').click(function(){
    if($('#ffst').hasClass('far fa-search')){
      $('#ffst').removeClass('far fa-search').addClass('far fa-times');
      $('.search-box').addClass('active-sb');
      return true;
    }else
    $('#ffst').removeClass('far fa-times').addClass('far fa-search');
    $('.search-box').removeClass('active-sb');
      return true;
  });
});


//Register

var activeregister 

function checkRegister() {
  var result = true;
  document.getElementById('messagerfname').innerHTML = '';
  document.getElementById('messagerlname').innerHTML = '';
  document.getElementById('messageremail').innerHTML = '';
  document.getElementById('messagerusername').innerHTML = '';
  document.getElementById('messagerpassword').innerHTML = '';
  document.getElementById('messagercpassword').innerHTML = '';
  var checkc1 = document.getElementById('rfname');
    if (checkc1.value.length < 1) {
      document.getElementById('messagerfname').innerHTML = 'You have not entered information yet!';
      result = false;
    }
  var checkc2 = document.getElementById('rlname');
    if (checkc2.value.length < 1) {
      document.getElementById('messagerlname').innerHTML = 'You have not entered information yet!';
      result = false;
    }
  var checkc3 = document.getElementById('remail');
    if (checkc3.value.length < 1) {
      document.getElementById('messageremail').innerHTML = 'You have not entered information yet!';
      result = false;
    }
  var checkc4 = document.getElementById('rusername');
    if (checkc4.value.length < 1) {
      document.getElementById('messagerusername').innerHTML = 'You have not entered information yet!';
      result = false;
    }
  var checkc5 = document.getElementById('rpassword');
    if (checkc5.value.length < 1) {
      document.getElementById('messagerpassword').innerHTML = 'You have not entered information yet!';
      result = false;
    }
  var checkc6 = document.getElementById('rcpassword');
    if (checkc6.value.length < 1) {
      document.getElementById('messagercpassword').innerHTML = 'You have not entered information yet!';
      result = false;
    }
    if (result == false) {
      return false;
    }
  var checkboxterms = document.getElementById('acceptrregulations');
    if (!checkboxterms.checked) {
      alter("you must accept La_Imperial's Terms, Data Policy and Cookie Policy to be able to register!");
      return false;
    }alter("Thank you for accompany La_Imperial!");
    return true;

}