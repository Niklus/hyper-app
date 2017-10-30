import {h} from 'hyperapp'

export default ({state, actions}) =>
  <main class="container">
    <h3>Gif Search module</h3>
    <input class="input border"
      type="text"
      placeholder="Type here..."
      onkeyup={actions.gifsearch.getURL}
      autofocus
    />
    <div class="container">
      <img class="container margin-top"
        src={state.gifsearch.url}
        style={{
          display: state.gifsearch.isFetching || state.gifsearch.url === "" ? "none" : "block"
        }}
      />
    </div>
  </main>