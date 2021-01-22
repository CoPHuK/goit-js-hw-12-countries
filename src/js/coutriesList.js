import notify from './notif'
import templates from '../tamlates/templates.hbs'
const listRef = document.querySelector('.infoBlock')

function counriesList(countries) {

    if (countries.length > 9) {
        notify.showNotificationAlert();
        return
    }
    countries.map((country) => {
        makeMarkUp(country)
        return
    })
}
  
      
function makeMarkUp(country) {
    const markUp = templates(country);
    listRef.insertAdjacentHTML('beforeend', markUp)
    }
  
export default counriesList