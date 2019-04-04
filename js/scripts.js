$(function(){
  $('#latin-form').submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();

    // function replaceNum(string){
    //   for(var i = 0; i < string.length; i++){
    //     newString = string.replace(/[0-9]/g, '');
    //   }
    //   return newString;
    // }
    // console.log(replaceNum(sentence));



    function latinConvert(str){
      var vowels = ['a','e','i','o','u'],
      result = str.split('');
      if(vowels.includes(str.charAt(0))){
        return str += 'way';


      }else {
        for(var i = 0; i < str.length; i++){
          if(!vowels.includes(str[i])){
            result.push(result.shift());
          } else {
            result.push('ay');
            return result.join('');
          };
        };
      };
    };


    console.log(latinConvert(sentence));


  })
})
