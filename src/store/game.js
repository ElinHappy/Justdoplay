import { Store  } from "../core/heropy";

const store = new Store({
    queryText: '',
    games: [],
    game: {},
    promoGames: [],
    loading: false,
    //message: 'Search for the game title!'
})

export default store


export const queryGames = async queryText => {
        store.state.loading = true
        console.log(queryText)
        const { gamesMost } = await import('../store/gm_mostpopular.json')
        const { gamesEditor } = await import('../store/gm_editor.json')
        const { gamesHot } = await import('../store/gm_hot.json')
        const { PromoGames } = await import('../store/games_promo.json')
        //const { games } = await import('../store/gm_mostpopular.json')
        //console.log(PromoGames)
        store.state.promoGames = PromoGames
        //console.log(store.state.games)

        try {
            //https://gamemonetize.com/feed.php?format=0&category=13&platform=1&num=100&page=1
            //https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=newest&company=All&amount=30
            // const res2 = await fetch('https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=mostplayed&company=All&amount=80')
            //const res = await fetch('https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=branding&company=All&amount=30')
            //const gamesNewest = await res.json() 
            //const gamesMost = await res2.json() 
            //const res3 = await fetch('https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=editorpicks&company=All&amount=30')
            //const gamesEdit = await res3.json() 
            //console.log(games)
            if ( gamesMost[0].id !== "") {
                store.state.games = [
                    //...store.state.games,
                    ...gamesMost,
                    ...gamesHot,
                    ...gamesEditor

                ]
            } else {
                store.state.message = Error
            }
            Array.from(new Set(store.state.games));
        } catch(error) {
            console.log('queryGames error', error)
        } finally {
            store.state.loading = false
        }
       // console.log(store.state.games)
}
/*
const getGames = async popularity => {
    const reqUrl = `https://gamemonetize.com/rssfeed.php?format=json&category=All&type=html5&popularity=${popularity}&company=All&amount=50`
    const res = await fetch(reqUrl)
    const games = await res.json() 
    return games
}
*/