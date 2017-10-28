
// LOCAL STORAGE

const getStateFromStorage = () => JSON.parse(window.localStorage.getItem('state'))

const storeStateInStorage = (state) => window.localStorage.setItem('state', JSON.stringify(state))

export {getStateFromStorage, storeStateInStorage}