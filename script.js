import wordsToNumbers from './index.js';

var convert = document.getElementById('convert');
convert.addEventListener('click',()=>{
    var input = document.getElementById('input').value;
    var output = document.getElementById('output');

    output.value = wordsToNumbers(input);
    

})