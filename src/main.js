import './style.scss'
import MainNav from './modules/main-nav/MainNav.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!')
}

/* eslint-disable */
var mainNav = new MainNav(document.querySelector('.main-nav'))
/* eslint-enable */
