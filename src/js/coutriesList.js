import notify from './notif'
import templates from '../tamplates/templates.hbs'
import templatesList from '../tamplates/coutriesList.hbs'
const listRef = document.querySelector('.infoBlock')

function counriesList(countries) {
    console.log(countries);
     if (countries.length) {
        if (countries.length > 9) {
            
            return notify.showNotificationAlert();
        }
        else if (countries.length > 1 && countries.length < 10) {
                //  countries.map((countries) => {
                // console.log('1');
                // let countryNameArr = ''
                // console.log(countries.capital);
            //     return makeMarkUpList(countries)
            // })
            return makeMarkUpList(countries)
        }
        else {
            makeMarkUp(countries[0])
            return
        }
    }
    else { 
        showNotificationAlert()
    }
}
  

function makeMarkUp(country) {
    console.log(country);
    const markUp = templates(country);
    
    listRef.insertAdjacentHTML('beforeend', markUp)
}
    
function makeMarkUpList(countries) {
    const markUp = countries.map((country) => { return templatesList(country); });
    console.log(markUp.join(''));
    listRef.insertAdjacentHTML('beforeend',  markUp.join('') )
    }
export default counriesList