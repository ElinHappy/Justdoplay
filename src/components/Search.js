import { Component } from "../core/heropy"
import movieStore, { searchMovies } from "../store/movie"
import gameStore, { queryGames } from "../store/game"
 
export default class Search extends Component {
    render() {
        //movieStore.state.searchText = 'super'
        //searchMovies(1)
        //searchMovies(2)
        //searchMovies(3)
        //searchMovies(4)
        //searchMovies(5)

        gameStore.state.queryText = 'mostpopular'
        queryGames('mostpopular')

    //    this.el.classList.add('search')
    //    this.el.innerHTML = /* html */ `
    //        <input placeholder="Enter the movie title to search!">
    //        <button class="btn btn-primary">SEARCH!</button>
    //    `
    //    const inputEl = this.el.querySelector('input')
 
    //    inputEl.addEventListener('input', () => {
    //        movieStore.state.searchText = inputEl.value
    //    })
    
    //    inputEl.addEventListener('keydown', event => {
    //        if(event.key === 'Enter' && movieStore.state.searchText.trim()) {
    //            searchMovies(1)
    //        }
    
    //    } )
    
    //    const btnEl = this.el.querySelector('.btn')
    //    btnEl.addEventListener('click', () => {
    //        if(movieStore.state.searchText.trim()) {
    //            searchMovies(1)
    //        }
    //    })
    }

}