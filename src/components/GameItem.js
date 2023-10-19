import { Component } from "../core/heropy"
import gameStore from "../store/game"

export default class GameItem extends Component {
    constructor(props) {
        super({
            props, 
            tagName: 'a'
        })
    }

    

    render() {
        const { game } = this.props
        //const { promoGame } = this.promoGames
       // this.el.setAttribute('href',`#/game/game?id=${game.id}`)
        this.el.setAttribute('href',`#/game/${game.title.replace(/\s+/g, '-').toLowerCase()}/?id=${game.id}`)
        this.el.classList.add('game')
        
        
        //console.log(gameStore.state.promoGames)

        const curGame = gameStore.state.promoGames.find( promoGame => promoGame.id === game.id)
        console.log(typeof curGame)

        if( curGame !== undefined) {
            console.log(curGame.id, curGame.gridPosition)
            this.el.classList.add(curGame.gridPosition)
        }
        
        if( game.id === '29625') {
            this.el.classList.add('fg4')
        }  else if( game.id === '12602') {
            this.el.classList.add('fg5')
        }
        this.el.style.backgroundImage = `url(${game.thumb})`
        //this.el.style.backgroundImage = `url(https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/${game.image.path})`
        //<img src="${movie.Poster}}" width="${this.imgWH}" height="${this.imgWH}">
        //<div class="year">${movie.Year}</div>

        this.el.innerHTML = /* html */ `
            <div class="info">
                <div class="title">${game.title}</div>
            </div>
        `
    }
}