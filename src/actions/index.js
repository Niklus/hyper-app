import { sw_register } from '../utils/sw_register'
import { logCRP } from '../utils/measure_crp'

export default {
  
  // Simple actions
  increament(state){
    return {
      value: state.value + 1,
      arrStore: state.arrStore.concat([state.value + 1]), // creates a new array
      objStore: { value: state.objStore.value + 1  }// new object. Thou shall not mutate state
    }
  },

  changeName(s, a, evt){
    const newName = evt.target.value;
    evt.target.value = "";
    return { name: newName };   
  },

  // Requests 
  getData(s, actions){ 
    // Thunks return a function instead of a partial state
    // Use for asuync updates
    return update => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        update({data: data})
      })
    }
  },
  
  // Routing: changing the state triggers a conditional re-rendering base on route 
  // Official router is better but cant get it to work :(
  changeRoute(){
    return { route: window.location.hash.slice(1)};
  },
  
  // Dom Actions
  toggleClass(){
    const nav = document.querySelector('.nav');
    nav.classList.toggle("mobile");
  },

  // Initial Aaction
  onLoad(state, actions) { 
    logCRP()
    sw_register()
    window.addEventListener('hashchange', actions.changeRoute)
    //actions.myModule.logIt()
  },
  
  // Alternative of thunks
  updateState(s, a, data){ return data }
}

