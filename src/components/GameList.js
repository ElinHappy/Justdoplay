import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import GameItem from "./GameItem"
import GameCategory from "../components/GameCategory";

export default class GameList extends Component {
    constructor() {
        super()
        movieStore.subscribe('games main-grid', () => {
            this.render()
        })
        movieStore.subscribe('loading', () => {
            this.render()
        })
        movieStore.subscribe('message', () => {
            this.render()
        })
    }
    render () {
        const categories = new GameCategory().el
        this.el.classList.add('game-list')
        this.el.innerHTML = /* html */ `
            ${movieStore.state.message 
            ? `<div class="message">${movieStore.state.message}</div>` 
            : '<div class="games main-grid"></div>'}
            ${categories.outerHTML}
            <div class="the-loader hide"></div>
        `
        const gamesEl = this.el.querySelector('.games')
        gamesEl?.append(
            ...movieStore.state.movies.map( movie => new GameItem({movie}).el)
        )
        const loadingEl = this.el.querySelector('.the-loader')
        movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
    }
}