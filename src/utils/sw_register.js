// service worker registration
export const sw_register = () => {
	if(window.navigator.serviceWorker) {
	   window.navigator.serviceWorker.register('/sw.js')
	   .then( reg => { 
	    console.log('Registration succeeded. Scope is ' + reg.scope)
	   }).catch( err => {
	    console.error('Unable to register service worker.', err);
	  });
	}
}