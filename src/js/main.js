import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries'
import counriesList from './coutriesList'
import refs from './refs'
import notify from './notif'


refs.inputRef.addEventListener('input', debounce(searching, 2000))


function searching(event) {
    event.preventDefault()
    refs.listRef.innerHTML = "";
    let name = refs.inputRef.value
    fetchCountries(name).then(counriesList).catch(notify.showNotificationError)
    refs.inputRef.value = "";
}
