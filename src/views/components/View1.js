import { h } from 'hyperapp'

export default ({state, actions}) => {

  const route = state.route == 'view1' || state.route == '';

  return route ? (
    <div class="container margin-top">
      
      <button class="button teal round" onclick={actions.increament}>
        increament
      </button>
      
      <div>
        <p>value {state.value}</p>
        <p>array length is {state.arrStore.length}</p>
        <p>object value is {state.objStore.value}</p>
      </div>

      <hr/>
    </div>
  ) : null
}


