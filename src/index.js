
import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './views'
import modules from "./modules"
//import { router } from "@hyperapp/router"
import logger from "@hyperapp/logger"

/* APP */

logger()(app)({ 
	actions, 
	state, 
	view,
	modules,
	init(s, { init }){ init() }
}, document.getElementById('app'))
