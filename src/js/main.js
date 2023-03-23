import {
  iosVhFix,
} from './modules/utils.js';


// все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
// в load следует добавить скрипты, не участвующие в работе первого экрана
document.addEventListener( 'DOMContentLoaded', () => {
  // Settings
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener( 'load', () => {

  } );
} );
