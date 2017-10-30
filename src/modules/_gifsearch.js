const GIPHY_API_KEY = "vHi0FGOdiNOLuWQ38T64s2dgkR22iZDW"

export default {
  
  state: {
    url: "",
    isFetching: false
  },

  actions: {
    getURL: (state, actions, { target }) => {
      const text = target.value

      if (state.isFetching || text === "") {
        return { url: "" }
      }

      actions.toggleFetching()

      fetch(`//api.giphy.com/v1/gifs/search?q=${text}&api_key=${GIPHY_API_KEY}`)
        .then(data => data.json())
        .then(({ data }) => {
          actions.toggleFetching()
          data[0] && actions.setURL(data[0].images.original.url)
        })
    },
    
    setURL: (state, actions, url) => ({ url }),

    toggleFetching: state => ({ isFetching: !state.isFetching })
  }
}
