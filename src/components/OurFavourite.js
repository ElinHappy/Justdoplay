import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import GameItem from "./GameItem"
import GameCategory from "./GameCategory";

export default class OurFavourite extends Component {
    constructor() {
        super()
        movieStore.subscribe('games ourfav-grid', () => {
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
            <div class="the-loader hide"></div>
            ${movieStore.state.message 
            ? `<div class="message">${movieStore.state.message}</div>` 
            : '<div class="games ourfav-grid"><div class="our-fav-title"><h1>Cool Games</h1></div></div>'}
            ${categories.outerHTML}
     
        `
        const gamesEl = this.el.querySelector('.games')
        gamesEl?.append(
            ...movieStore.state.movies.map( movie => new GameItem({movie}).el)
        )
        const loadingEl = this.el.querySelector('.the-loader')
        movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
    }
}