import notify from './notif'
import templates from '../tamlates/templates.hbs'
const listRef = document.querySelector('.infoBlock')
console.log(listRef);

function counriesList(countries) {
    console.log(countries.length);
    if (countries.length > 9) {
        notify.showNotificationError()
        return
    }
    countries.map((country) => {
        console.log('making');
        makeMarkUp(country)
        return
    })
}
  
  

    
      function makeMarkUp(countries) {
            console.log('32');
            const markUp = templates(countries);
            listRef.insertAdjacentHTML('beforeend', markUp)
        }
  
export default counriesList