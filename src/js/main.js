import debounce from 'lodash.debounce';

const inputRef = document.querySelector("#countryInput");


function logi() { 
    console.log(inputRef.value);
}
inputRef.addEventListener('input', debounce(searching, 5000))
function naming() { 
    const name = 'Ukraine'
    return name
}
// inputRef.addEventListener('input', debounce(searching, 5000))
function searching() {

   naming()
    console.log(name);
    fetch('https://restcountries.eu/rest/v2/name/${name}').then(response => response.json()).then(data => console.dir(data)) }