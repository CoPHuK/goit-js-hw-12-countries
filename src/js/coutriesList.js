import notify from './notif'
import templates from '../tamplates/templates.hbs'
import templatesList from '../tamplates/coutriesList.hbs'
const listRef = document.querySelector('.infoBlock')

function counriesList(countries) {
console.log(countries.length);
    if (countries.length > 9) {
        notify.showNotificationAlert();
        return
    }
    else if (countries.length > 1 && countries.length < 10) {
       
        countries.map((country) => {
            makeMarkUpList(country)
            return
        })
    }
    else {
        makeMarkUp(countries[0])
        return
    }
}
  

function makeMarkUp(country) {
    console.log(country);
    const markUp = templates(country);
    listRef.insertAdjacentHTML('beforeend', markUp)
}
    
function makeMarkUpList(country) {
    const markUp = templatesList(country);
    listRef.insertAdjacentHTML('beforeend', markUp)
    }
export default counriesList