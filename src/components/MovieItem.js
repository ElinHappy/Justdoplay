import { Component } from "../core/heropy"

export default class MovieItem extends Component {
    constructor(props) {
        super({
            props, 
            tagName: 'a',
        })
    }

    render() {
        const { movie } = this.props
//console.log(movie)
        this.el.setAttribute('href',`#/game/game?id=${movie.imdbID}`)
        this.el.classList.add('game')
        if( movie.imdbID === 'tt0119174') {
            this.el.classList.add('fg1')
        } else if( movie.imdbID === 'tt1515091') {
            this.el.classList.add('fg2')
        }
        this.el.style.backgroundImage = `url(${movie.Poster})`
        //<img src="${movie.Poster}}" width="${this.imgWH}" height="${this.imgWH}">
        //<div class="year">${movie.Year}</div>

        this.el.innerHTML = /* html */ `
            <div class="info">
                <div class="title">${movie.Title}</div>
            </div>
        `
    }
}