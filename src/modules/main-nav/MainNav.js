import template from './MainNav.pug'
import './MainNav.scss'
import mainNav from './../../data/data.json'

export default class MainNav {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(mainNav)
  }
}
