import { Component } from "../core/heropy"
import movieStore from "../store/movie"
import gameStore from "../store/game"
//import MovieItem from "./MovieItem"
import GameItem from "./GameItem"
import GameCategory from "../components/GameCategory";

export default class GameList extends Component {
    constructor() {
        super()

        gameStore.subscribe('games main-grid', () => {
            console.log('subscribe games main-grid')
            this.render()
        })
        gameStore.subscribe('loading', () => {
            console.log('subscribe loading')
            this.render()
        })
        gameStore.subscribe('message', () => {
            console.log('subscribe message')
            this.render()
        })

    }
    render () {
        const categories = new GameCategory().el

        this.el.classList.add('game-list')
        //<div class="the-loader hide"></div>
        this.el.innerHTML = /* html */ `
            ${gameStore.state.message 
            ? `<div class="message">${gameStore.state.message}</div>` 
            : '<div class="games main-grid"></div>'}
            ${categories.outerHTML}
           
        `
        //console.log(gameStore.state.games)
        const gamesEl = this.el.querySelector('.games')
        gamesEl?.append(
            //...movieStore.state.movies.map( movie => new MovieItem({movie}).el),
            ...gameStore.state.games.map( game => new GameItem({game}).el)
        )
        //const loadingEl = this.el.querySelector('.the-loader')
        //movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
    }
}