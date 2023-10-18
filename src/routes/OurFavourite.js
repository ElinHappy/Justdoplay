import { Component } from "../core/heropy";
//import Headline from "../components/Headline";
import Search from "../components/Search";
import GameListOurFav from "../components/GameListOurFav";
import GameDesc from "../components/GameDesc";
import MovieListMore from "../components/MovieListMore";


export default class OurFavourite extends Component {
    render() {
        //const headline = new Headline().el
        const search = new Search().el
        const gamelistourfav = new GameListOurFav().el
        const movielistmore = new MovieListMore().el
        const gamedesc = new GameDesc().el

        this.el.classList.add('container')
        this.el.append(
            //headline,
            search,
            movielistmore,
            gamelistourfav,
            gamedesc

        )
    }
}