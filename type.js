let body = $('body');
let uppercase = document.getElementById('keyboard-upper-container') // got my ID element through DOM
let lowercase = document.getElementById('keyboard-lower-container') //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
let keys = document.getElementsByClassName("well well-lg key") // variable for keys
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', //this is the array for my sentences
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let i = 0;
let senIdx = sentences[i];
let letterNum = 0;
let letter = senIdx.substring(letterNum, letterNum + 1);
let senText = document.getElementById('sentence');
let letterText = document.getElementById('target-letter');
let moveYellowBlock = document.getElementById('yellow-block')
$(senText).text(senIdx);
$(letterText).text(letter);


$(uppercase).hide();//this hide my uppercase letters

//this will allow shift to hide my lower case letters
$(document).ready(function () {
    //shift key down function
    $('body').keydown(function (e) {
        let shift = e.which;
        if (shift == 16) {
            $(uppercase).show();
            $(lowercase).hide();
        }
    })
})
//shift key up function
$(document).ready(function () {
    $(body).keyup(function (e) {
        let shift = e.which;
        if (shift == 16) {
            $(uppercase).hide();
            $(lowercase).show();
        }
    })
})

//keys light up when pressed
$(document).ready(function () {
    $(body).keypress(function (e) {
        let key = $('#' + e.which)
        $(key).css('background', 'yellow');
        $(body).keyup(function (e) {
            $(key).css('background', '')
        })

        //keys follow the letters in the sentence
        $(body).keypress(function (e) {
            if (e.which === sentences[i].charCodeAt(letterNum)) {
                $(`div #feedback`).text(`correct`).css('color', 'green');
                letterNum++;
                letter = senIdx.substring(letterNum, letterNum + 1);
                $(letterText).text(letter);
                $(moveYellowBlock).css('left', '+= 17.5px');
                if (letterNum === senIdx.length) {
                    i++;
                    if (i === sentences.length) {
                        alert('done!');
                    } else{
                        senIdx =sentences[i];
                        $(senText).text(senIdx);
                        letterNum = 0;
                        letter = senIdx.substring(letterNum, letterNum + 1)
                        $(letterText).text(letter);
                        $('#yellow-box').css('left', '15px')
                        $('#feedback').text('');
                    }
                }
            }
        })
    })


})



    //this is the function for my sentence array




























// //(let values) OPEN//
// let body = $('body');
// let sentences = ['ten ate neite ate nee enet ite ate inet ent eate.',
//     'Too ato too nOt enot one totA not anot tOO aNot.',
//     'oat itain oat tain nate eate tea anne inant nean.',
//     'itant eate anot eat nato inate eat anot tain eat.',
//     'nee ene ate ite tent tiet ent ine ene ete ene ate.'];
//     let senIdx = 0;
// let singleSentence = sentences[senIdx];
// let letterIndex = 0;
// let keysPressed = 0;
// let letterNum = 0;
// let numberOfLetters=0
// let hightlightClass = 'keypress-hightlight;'
// //(let Values) CLOSE//
// //this is where I will JQUERY Append
// $('#keyboard-upper-container').hide();

// $('#yellow-block').animate()
// $('#sentence').append(sentences[senIdx]);
// $('#target-letter').append(sentences[senIdx].charAt(letterIndex));
// //this code will toggle the keyboard when i use the shift key
// $(document).ready(function () {
//     $(body).keydown(function (event) {
//         keyId = event.which;
//         if (keyId != 'undefined') {
//             if (keyId == 16) {
//                 $('#keyboard-upper-container').toggle();
//                 $('#keyboard-lower-container').toggle();

//             }
//         }
//         $(body).keyup(function (event) {
//             keyId = event.which;
//             if (keyId != 'undefined') {
//                 if (keyId == 16) {
//                     $('#keyboard-upper-container').toggle();
//                     $('#keyboard-lower-container').toggle();
//                 }
//             }

//         })
//     })


//     //this is the function code for the sentence array
//     // function nextSentence() {
//     //     if (senIdx < sentences.length - 1) {
//     //         senIdx++;
//     //         letterIndex = 0;
//     //         $('#feedback').empty()

//     //         $('#sentence').text(sentences[senIdx]);
//     //         nextLetter();
//     //     }
//     // }

//     //ENTER FINISHED NEW CODES ABOVE THIS LINE^^^
// })

// ///THIS AREA IS FOR WORKING ON NEW CODES///


// //this function will move my yellow block
// // function moveYellowBlock(){
// //    $('#yellow-block').animate({ left: '15px' }); 
// // }

// $('body')



