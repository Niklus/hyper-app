import { sw_register } from '../utils/sw_register'
import { logCRP } from '../utils/measure_crp'

export default {
  
  // Simple actions
  increment({value, arr, obj}){
    return {
      value: value + 1,
      arr: arr.concat([value + 1]), // creates a new array
      obj: { value: obj.value + 1  }// new object. Thou shall not mutate state
    }
  },

  changeName(s, a, { target }){
    const newName = target.value;
    target.value = '';
    if(newName) return { name: newName }  
  },

  // Requests 
  getData(){ 
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
  
  // Routing: changing the state triggers a conditional re-rendering based on route 
  // Official router is better but cant get it to work :(
  changeRoute(){
    return { route: window.location.hash.slice(1)};
  },
  
  // Dom Actions
  toggleClass(){
    const nav = document.querySelector('.nav');
    nav.classList.toggle("mobile");
  },

  // Initial Action
  init(s, { changeRoute }) { 
    sw_register()
    window.addEventListener('hashchange', changeRoute)
    logCRP()
  }
}

