
import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './views'
import { myModule } from "./modules"
//import logger from "@hyperapp/logger"

/* APP */

app({ 
	actions, 
	state, 
	view,
	init(state, actions) { 
		actions.onLoad(); 
	},
	modules: { myModule }
}, document.getElementById('app'))
