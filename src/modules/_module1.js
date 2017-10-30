export default {
  
  state: { 
    name: 'module1' 
  },

  actions: {
  	logState: state => console.log(state)
  },

  init: (state, actions) => {
  	actions.logState()
  }
}