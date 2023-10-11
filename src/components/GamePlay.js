import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import GameItem from "./GameItem"
import GameCategory from "./GameCategory"
import GamePlayContainer from "./GamePlayContainer"
import AdContain from "./AdContain"

export default class GamePlay extends Component {
    constructor() {
        super()
        movieStore.subscribe('games play-grid', () => {
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
        const playcontainer = new GamePlayContainer().el
        const adsbottomBanner = new AdContain('gameplay-bottom-banner').el
        const adsrightBanner = new AdContain('gameplay-right-banner').el
        this.el.classList.add('game-list')
        this.el.innerHTML = /* html */ `
            ${movieStore.state.message 
            ? `<div class="message">${movieStore.state.message}</div>` 
            : `<div class="games play-grid"><div class="gameplay-area">${playcontainer.outerHTML}</div>${adsbottomBanner.outerHTML}${adsrightBanner.outerHTML}</div>`}
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