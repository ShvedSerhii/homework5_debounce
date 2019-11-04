let searchTemplate = document.getElementById('searchTemplate')
let inputText = document.getElementById('inputText') 
let totalResult = document.getElementById('totalResult')

let template = '' 
let input = ''
let result = 0

searchTemplate.oninput = function() {
    template = searchTemplate.value;
}


inputText.oninput = function() {
    input = inputText.value;
    result = search(template, input);
    totalResult.innerHTML = result;
}


function search(template, text) {
    let pos = -1;
    let result = 0;
    while ((pos = text.indexOf(template, pos + 1)) != -1) {
        result += 1;
    }
    return result;
}
