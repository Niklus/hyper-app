import { h } from 'hyperapp'

export default ({state, actions}) => {
  return state.route == "view2" ? (
		<div class="container margin-top">
			<button class="button teal round" onclick={actions.getData}>
			Get Data
			</button>
			<p>id: {state.data.id}</p>
			<p>title: {state.data.title}</p>
			<p>body: {state.data.body}</p>
		</div>
  ) : null
}
