import { createRouter } from '../core/heropy'
import Home from './Home'
import Game from './Game'
import OurFavourite from './OurFavourite'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
    { path: '#/', component: Home},
    { path: '#/game/.*', component: Game},
    { path: '#/cg/ourfav', component: OurFavourite},
    { path: '#/movie', component: Movie},
    { path: '#/about', component: About},
    { path: '.*', component: NotFound}
])