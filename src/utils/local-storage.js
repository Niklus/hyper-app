
// LOCAL STORAGE

const getStateFromStorage = () =>
  JSON.parse(window.localStorage.getItem('items'))

const storeStateInStorage = (state) =>
  window.localStorage.setItem('items', JSON.stringify(state))

export {getStateFromStorage, storeStateInStorage}