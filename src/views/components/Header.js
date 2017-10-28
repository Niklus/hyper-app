import {h} from 'hyperapp'

export default ({title}) =>
  <header class="bar teal large"
    oncreate={element => {}} 
    onupdate={(element, oldProps) => {}}
    onremove={(element, oldProps) => {}}>
    <span class="bar-item">{title}</span>
    <a href="#view1" class="bar-item button">view1</a>
    <a href="#view2" class="bar-item button">view2</a>
  </header>

