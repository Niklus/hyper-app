import { sw_register } from '../utils/sw_register'
import { getName } from './getName'

export default {

  increment: ({value, arr, obj}) => ({
    value: value + 1,
    arr: arr.concat([value + 1]),
    obj: { value: obj.value + 1  }
  }),
  
  changeName: (s, a, { target }) => ({
    name: getName(target)
  }),

  changeRoute: () => ({ 
    route: window.location.hash.slice(1)
  }),

  getData: () => { 
    return update => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        update({data: data})
      })
    }
  },

  init: (s, { changeRoute }) => { 
    window.addEventListener('hashchange', changeRoute)
    sw_register()
  }
}

