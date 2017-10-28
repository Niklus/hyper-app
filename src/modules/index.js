
export const myModule = {
  
  state: { 
    value: 0 
  },

  actions: {
  	logIt: (state, actions) => {
  		console.log('Modules State and actions')
  		console.log(state)
  		console.log(actions)
      return {value: 1}
  	}
  }
}
