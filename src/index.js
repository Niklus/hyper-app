
import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './view'
import modules from "./modules"
//import { router } from "@hyperapp/router"
//import logger from "@hyperapp/logger"
//import logCRP from './utils/measure_crp'

/* APP */
app({ 
	actions, 
	state, 
	view,
	modules,
}, document.getElementById('app')).start()
