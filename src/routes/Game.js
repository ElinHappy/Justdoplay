import { Component } from "../core/heropy";
import Search from "../components/Search";
import GamePlay from "../components/GamePlay";
import GameDesc from "../components/GameDesc";
import MovieListMore from "../components/MovieListMore";


export default class Game extends Component {
    render() {
        //const headline = new Headline().el
        const search = new Search().el
        const gameplay = new GamePlay().el
        const movielistmore = new MovieListMore().el
        const gamedesc = new GameDesc().el

        this.el.classList.add('container')
        this.el.append(
            //headline,
            search,
            gameplay,
            movielistmore,
            gamedesc

        )
    }
}