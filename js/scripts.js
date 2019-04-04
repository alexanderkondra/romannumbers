$(function(){
$('#RomanNumerals').submit(function(event){
  event.preventDefault();
  var number = $('input#number').val();


  function convert(num){

  var symbol = ['M','D','C','L','X','V','I'];
  var values = [1000,500,100,50,10,5,1];
  var result = '';

  for(var i=0; i<values.length; i++){
    while(num>=values[i]){
      result+=symbol[i];
      num-=values[i];
    }

    }
    return result;
  }
  console.log(convert(number));
})
})
