
const module1 = {
  
  state: { 
    name: 'module1' 
  },

  actions: {
  	logState: state => console.log(state)
  }
}

const module2 = {
  
  state: { 
    name: 'module2' 
  },

  actions: {
    logState: state => console.log(state)
  }
}

export default { module1, module2 }
