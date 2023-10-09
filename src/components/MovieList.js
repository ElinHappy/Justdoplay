import { Component } from "../core/heropy"
import store from "../store/movie"
import movieStore from "../store/movie"
import MovieItem from "./MovieItem"

export default class MovieList extends Component {
    constructor() {
        super()
        movieStore.subscribe('movies main-grid', () => {
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
        this.el.classList.add('movie-list')
        this.el.innerHTML = /* html */ `
            ${movieStore.state.message 
            ? `<div class="message">${movieStore.state.message}</div>` 
            : '<div class="movies main-grid"></div>'}
            <div class="categories main-grid"></div>
            <div class="the-loader hide"></div>
        `
        const moviesEl = this.el.querySelector('.movies')
        moviesEl?.append(
            ...movieStore.state.movies.map( movie => new MovieItem({movie}).el) 
        )
        this.getCategories()
    
        const loadingEl = this.el.querySelector('.the-loader')
        movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
    }

    getCategories() {
        const categoriesEl = this.el.querySelector('.categories')
        categoriesEl.innerHTML = /* html */ `
        <div style="display: contents;">
            <a href="/en/sports" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/74fcc4de-b3d3-48c6-ab25-314afbf03812.jpg"
                    alt="Sports Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Sports Games</span>
            </a>
            <a href="/en/action" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/CAGA3.jpg"
                    alt="Action Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Action Games</span>
            </a>
            <a href="/en/board" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/de9794071cc55f390698e0fc58891726.png"
                    alt="Board Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Board Games</span>
            </a>
            <a href="/en/racing" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/CAGA1.jpg"
                    alt="Racing Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Racing Games</span>
            </a>
            <a href="/en/skill" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/CAGA9.png"
                    alt="Skill Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Skill Games</span>
            </a>
            <a href="/en/adventure" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/CAGA6.png"
                    alt="Adventure Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="cate-title">Adventure Games</span>
            </a>
            <a href="/en/adventure" class="fc-list">
                <img
                    src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/CAGA6.png"
                    alt="Adventure Games"
                    loading="eager"
                    decoding="async"
                    width="204"
                    height="204"
                    class="sc-18mcksl-1 eoBBYj"
                />
                <span class="bc-title">Adventure Games</span>
            </a>
        </div>
        
        <div style="display: contents;">
    <a href="/en/popular-games" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/6568251c8b35832abcb1bfa9bb62d611.png"
            alt="Popular Games"
            loading="lazy"
            decoding="async"
            width="94"
            hight="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Popular Games</span>
    </a>
    <a href="/en/two-player" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/86a2e7c75d67b042e569c75dc24a8c82.png"
            alt="2 Player Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">2 Player Games</span>
    </a>
    <a href="/en/arcade" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/79e3b6d493e9f4fe5231d61daec8e444.jfif"
            alt="Arcade Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Arcade Games</span>
    </a>
    <a href="/en/io" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/2f6b21324b7f61cdcdc1556dbc41667b.png"
            alt=".io Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">.io Games</span>
    </a>
    <a href="/en/car" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/4b4de738-c4ce-476d-bf46-a5455eb9af67.jpg"
            alt="Car Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Car Games</span>
    </a>
    <a href="/en/trial-bike" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/c9668ab6948cdc0ae92a98defce7e261.png"
            alt="Bike Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Bike Games</span>
    </a>
    <a href="/en/new" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/5c0ad0eff37540bc04d97b90121ecffc.png"
            alt="New Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">New Games</span>
    </a>
    <a href="/en/shooting" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/CAGA77.jpg"
            alt="Shooting Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Shooting Games</span>
    </a>
    <a href="/en/war" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/CAGA65.jpg"
            alt="War Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">War Games</span>
    </a>
    <a href="/en/app-store" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/75a5cbebe37091b972de29548e0ba75d.png"
            alt="App Store Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">App Store Games</span>
    </a>
    <a href="/en/fighting" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/CAGA80.jpg"
            alt="Fighting Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Fighting Games</span>
    </a>
    <a href="/en/car-racing" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/c6f8e7dcd3e87d0f30042299d178d4a5.png"
            alt="Car Racing Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Car Racing Games</span>
    </a>
    <a href="/en/running" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/3cb98436e52b5d9cd1a8907b92e8a34e.png"
            alt="Running Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Running Games</span>
    </a>
    <a href="/en/police" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/2f5c55eb8b35033b85a97df617a0ef3f.png"
            alt="Police Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Police Games</span>
    </a>
    <a href="/en/funny" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/1de89895f64c094c1d1dd2fee2c68371.png"
            alt="Funny Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Funny Games</span>
    </a>
    <a href="/en/crazy-games" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/efd6460d708161496fb83b9d3a0b1d55.png"
            alt="Crazy Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Crazy Games</span>
    </a>
    <a href="/en/stickman" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/83454387588cbfa46da29618344354ec.png"
            alt="Stickman Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Stickman Games</span>
    </a>
    <a href="/en/online" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/8fd137c0fbb359e47fb336c05b7ed4d4.png"
            alt="Online Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Online Games</span>
    </a>
    <a href="/en/driving" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/799a9f63b2d359d2cdbbcd4a896e9f69.png"
            alt="Driving Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Driving Games</span>
    </a>
    <a href="/en/motor-jump" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/5b8f08a4eade0f0ab668244ea17eeff7.png"
            alt="Motorbike Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Motorbike Games</span>
    </a>
    <a href="/en/airplane" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/824d047ff03e1eec0cb6de21071dfc31.png"
            alt="Airplane Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Airplane Games</span>
    </a>
    <a href="/en/online-worlds" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/301db2e0beb8dd78bc83da5a3946e8de.png"
            alt="Multiplayer Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Multiplayer Games</span>
    </a>
    <a href="/en/snake" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/fdc97b32e121d6db75a7a64861418a08.png"
            alt="Snake Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Snake Games</span>
    </a>
    <a href="/en/basketball" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/e31376ff989f3b319aad95909a5c1dfb.png"
            alt="Basketball Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Basketball Games</span>
    </a>
    <a href="/en/american-football" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/5a343d1083a05b80bf88f74c21e29d42.png"
            alt="Football Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Football Games</span>
    </a>
    <a href="/en/boxing" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/CAGA14.jpg"
            alt="Boxing Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Boxing Games</span>
    </a>
    <a href="/en/soccer" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/e9f38ef1-2729-40b9-b3fa-d47f72e9a979.jpg"
            alt="Soccer Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Soccer Games</span>
    </a>
    <a href="/en/ball" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/0803e0bdc08294273b429ef11f3a3506.png"
            alt="Ball Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Ball Games</span>
    </a>
    <a href="/en/cooking" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/7665012ece230775d676bd1d58faf9a9.jfif"
            alt="Cooking Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Cooking Games</span>
    </a>
    <a href="/en/papas" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/ae761f5076edbb43161474ecf05a72e1.png"
            alt="Papa's Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Papa's Games</span>
    </a>
    <a href="/en/flash" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/908838b8eec34bc74c9812a539863e13.png"
            alt="Flash Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Flash Games</span>
    </a>
    <a href="/en/obby" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/4a42b82e783fff8b8dac68b094a21192.png"
            alt="Obby Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Obby Games</span>
    </a>
    <a href="/en/halloween" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/ed5f52aaa56945bc4621ad1026602f5d.png"
            alt="Halloween Games"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Halloween Games</span>
    </a>
    <a href="/en/jeuxjeuxjeux" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/31ec8961321a6f64d27ec8b15d0b48d7.png"
            alt="JeuxJeuxJeux"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">JeuxJeuxJeux</span>
    </a>
    <a href="/en/pais-de-los-juegos" class="bc-list">
        <img
            src="https://img.poki.com/cdn-cgi/image/quality=78,width=94,height=94,fit=cover,f=auto/d18022adbe20175d1af8ef1207fcc1e9.png"
            alt="Pais de Los Juegos"
            loading="lazy"
            decoding="async"
            width="94"
            height="94"
            class="sc-18mcksl-1 eoBBYj"
        />
        <span class="bc-title">Pais de Los Juegos</span>
    </a>
</div>

        `
    }
}