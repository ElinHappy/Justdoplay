import { Component } from "../core/heropy";
//import Headline from "../components/Headline";
import Search from "../components/Search";
import GameList from "../components/GameList";
import GameDesc from "../components/GameDesc";
import MovieListMore from "../components/MovieListMore";


export default class Home extends Component {
    render() {
        //const headline = new Headline().el
        const search = new Search().el
        const gamelist = new GameList().el
        //const movielistmore = new MovieListMore().el
        //const gamedesc = new GameDesc().el

        this.el.classList.add('container')
        this.el.append(
            //headline,
            search,
            //movielistmore,
            gamelist
            //gamedesc

        )
    }
}