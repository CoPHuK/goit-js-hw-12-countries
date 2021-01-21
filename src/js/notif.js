import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';

const { alert, notice, info, success, error } = require('@pnotify/core');

function showNotificationError() {
  info({
    text: "Too many matches found. Please enter a more specific query! "
  });
}
export default {showNotificationError};