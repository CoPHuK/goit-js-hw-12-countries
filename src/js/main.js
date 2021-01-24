import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries'
import counriesList from './coutriesList'
import refs from './refs'
import notify from './notif'


refs.inputRef.addEventListener('input', debounce(searching, 500))


function searching(event) {
    event.preventDefault()
      let name = refs.inputRef.value
    if (!name) {
        return
    }
    else {
        refs.listRef.innerHTML = "";
        fetchCountries(name).then(counriesList).catch(notify.showNotificationError)
    }
}
