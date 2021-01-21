import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries'
import counriesList from './coutriesList'

const listRef=document.querySelector('.infoBlock')

const inputRef = document.querySelector("#countryInput");


inputRef.addEventListener('input', debounce(searching, 2000))


function searching(event) {
    event.preventDefault()
    let name = inputRef.value
    console.log(name);
    fetchCountries(name).then(counriesList)
}


function kil(countries) { 
 
}


