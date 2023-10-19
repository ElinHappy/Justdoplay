import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import gameStore from "../store/game"
import GameItem from "./GameItem"
import GameCategory from "./GameCategory"
import GamePlayContainer from "./GamePlayContainer"
import AdContain from "./AdContain"
import GameDesc from "./GameDesc"

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
//console.log(gameStore.state.games)
//console.log(window.location.hash)
        const cur_game = gameStore.state.games.find( game => game.id === history.state.id)
        const categories = new GameCategory().el
        const playcontainer = new GamePlayContainer({cur_game}).el
        const adsbottomBanner = new AdContain('gameplay-bottom-banner').el
        const adsrightBanner = new AdContain('gameplay-right-banner').el
        const gamedesc = new GameDesc({cur_game}).el
        this.el.classList.add('game-list')
        this.el.innerHTML = /* html */ `
            <div class="games play-grid"><div class="gameplay-area">${playcontainer.outerHTML}</div>${adsbottomBanner.outerHTML}${adsrightBanner.outerHTML}</div>
            ${categories.outerHTML}
            ${gamedesc.outerHTML}
        `
        //<div class="the-loader hide"></div>
        //console.log(gameStore.state.games)
        const gamesEl = this.el.querySelector('.games')
        gamesEl?.append(
            ...gameStore.state.games.map( game => new GameItem({game}).el)
        )




        

        //const loadingEl = this.el.querySelector('.the-loader')
        //movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
    }
}