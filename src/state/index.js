// App State
// Each time the state is updated it re renders the view
export default {
  name: 'Hyper App',
  value: 0,
  objStore : { value: 0 },
  arrStore: [],
  data: {},
  route : window.location.hash.slice(1) // Having problems with the official router: so we use hash for conditional rendering for now
}