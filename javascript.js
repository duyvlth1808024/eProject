//Home

$(document).ready(function(){
  $('#cdsearch').click(function(){
    if($('#ffst').hasClass('far fa-search')){
      $('#ffst').removeClass('far fa-search').addClass('far fa-times');
      $('.search-box').addClass('active-sb');
      return true;
    }else{
    $('#ffst').removeClass('far fa-times').addClass('far fa-search');
    $('.search-box').removeClass('active-sb');
      return true;
    }
  });
  $('#ffct').click(function(){
    $('#ffst').removeClass('far fa-times').addClass('far fa-search');
    $('.search-box').removeClass('active-sb');
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