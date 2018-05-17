//GLOBAL DATA (let values) OPEN//
let body = $('body');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate.',
 'Too ato too nOt enot one totA not anot tOO aNot.',
 'oat itain oat tain nate eate tea anne inant nean.',
  'itant eate anot eat nato inate eat anot tain eat.', 
  'nee ene ate ite tent tiet ent ine ene ete ene ate.'];
  let senIdx = 0;
  let singleSentence = sentences[senIdx];
  let letterIndex = 0;
  let keysPressed=0;
  let letterNum = 0;
  let letter= singleSentence.substring(letterNum, letterNum + 1);
// GLOBAL DATA (let Values) CLOSE//
//this is where I will JQUERY Append
$('#keyboard-upper-container').hide();
$('#sentence').append(sentences[senIdx]);
$('#target-letter').append(sentences[senIdx].charAt(letterIndex));
//this code will toggle the keyboard when i use the shift key
$(document).ready(function(){
    $(body).keydown(function (event){
    keyId = event.which;
    if(keyId != 'undefined'){
        if( keyId == 16){
            $('#keyboard-upper-container').toggle();
            $('#keyboard-lower-container').toggle();
            
        }
    }
})

//this is the function code for the sentence array
function nextSentence(){
 if (senIdx < sentences.length -1){
     senIdx ++;
     letterIndex = 0;
     $('#feedback').empty()
     $('#yellow-block').animate({left: '15px'});
     $('#sentence').text(sentences[senIdx]);
     nextLetter();
 }
}

//ENTER FINISHED NEW CODES ABOVE THIS LINE^^^
})

///THIS AREA IS FOR WORKING ON NEW CODES///







