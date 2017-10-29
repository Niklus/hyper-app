export default {
  
  state: { 
    name: 'module2' 
  },

  actions: {
  	logState: state => console.log(state)
  },

  init: (state, actions) => {
  	actions.logState()
  }
}