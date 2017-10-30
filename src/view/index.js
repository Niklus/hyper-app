import { h } from 'hyperapp';
import Header from './components/Header.js' 
import View1 from './components/View1.js'
import View2 from './components/View2.js'
import Gifsearch from './components/Gifsearch.js' //module component

export default (state , actions) => 
	<div>
	  <Header title={state.name}/>
	  <View1 state={state} actions={actions}/>
	  <View2 state={state} actions={actions}/>
	  <hr/>
      <Gifsearch state={state} actions={actions}/>
	</div>


