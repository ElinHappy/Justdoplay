import { Component } from '../core/heropy'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Today Play!',
            href: '#/'
          },
          {
            name: 'Now Play!',
            href: '#/game/game?id=tt4520988'
          },
          {
            name: 'Our Favourires',
            href: '#/cg/ourfav?cname=weeklytop'
          },
          {
            name: 'G.O.D - Game Of the Day',
            href: '#/movie?id=tt4520988'
          },

          {
            name: 'Try NOW',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a
        href="#/"
        class="logo">
        <span>JustDoPlay!</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a
                  class="hmenu ${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User">
      </a>
    `
  }
}