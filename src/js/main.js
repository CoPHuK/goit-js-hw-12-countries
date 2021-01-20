import debounce from 'lodash.debounce';

const inputRef = document.querySelector("#countryInput");


function logi(val) { 
    const url = `https://restcountries.eu/rest/v2/name/${val}`;
    console.log(url);
    console.log(val);
  return fetch(url).then(response => response.json())
}
inputRef.addEventListener('input', debounce(searching, 5000))


function searching(event) {
    event.preventDefault()
    let name = inputRef.value
    console.log(name);
   logi(name).then(data => console.dir(data))
} 