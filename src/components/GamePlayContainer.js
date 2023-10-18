import { Component } from "../core/heropy";

export default class GamePlayContainer extends Component {
    constructor(props) {
        //console.log(props)
        super({
            props
        })
    }
    
    render() {
        const { cur_game } = this.props

        //console.log(cur_game)

        this.el.classList.add('gameplay-container')
        //const gameurl = 'http://populargame.site/wp-content/games/TriviaQuiz/index.html'
        //const gameurl = 'http://populargame.site/wp-content/games/TurnLeft/index.html'
        //const gameurl = 'https://js13kgames.com/games/fort-knight/index.html'
        //const gameurl = 'https://html5.gamemonetize.co/qrh3ov788e2pho4lisrwxjofjcmauvg1/'

        //https://games.poki.com/458768/2bb43ce0-0f5c-4c64-a308-49287cf65ce5?tag=pg-v3.135.0&amp;site_id=3&amp;iso_lang=en&amp;country=KR&amp;poki_url=https://poki.com/en/g/tag-2&amp;gdhoist=yes&amp;nonPersonalized=n&amp;familyFriendly=n&amp;categories=2,3,9,76,750,903,1140,1141,1163
        this.el.innerHTML = /* html */ `
        <div id="game-container" class="sc-1t2vga5-0 lboGGY"><div class="sc-1nfyi8d-0 bpRqPb"><div class="sc-1nfyi8d-1 kExbnh"><div id="game-player" class="sc-1nfyi8d-2 fVZlpl"><div class="sc-1nfyi8d-3 eKEphV"><iframe id="game-element" allowfullscreen="true" allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share" name="gameFrame" scrolling="no" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads" src="${cur_game.url}" title="Game" class="sc-1bxux5k-0 iIEDab"></iframe></div></div><div class="sc-1thi3bz-0 iQlMNh"><div class="sc-1thi3bz-7 fgQyVx"><img alt="${cur_game.title}" src="${cur_game.thumb}" decoding="async" class="sc-1ercfrx-1 jUGniJ"><div class="sc-1ercfrx-2 kZbSoa"><div class="sc-1ercfrx-3 TjjpU">${cur_game.title}</div><span class="sc-1ercfrx-6 dmrfFI">by JetGames</span></div></div><div style="display: contents;"><div class="sc-1thi3bz-1 hGklVU"><button class="sc-1wag0ht-6 jwXhHc"><div class="sc-1wag0ht-5 cwcbpr"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="sc-1wag0ht-0 iqLrJG"><use href="#thumbsUpIcon"></use></svg></div><div class="sc-1wag0ht-1 iUqdTV"><span class="sc-1wag0ht-2 sc-1wag0ht-3 hEtgR jhrTfi">26.1K</span><span class="sc-1wag0ht-2 sc-1wag0ht-4 hEtgR jWGbzI">Like</span></div></button><button class="sc-1wag0ht-6 jwXhHc"><div class="sc-1wag0ht-5 eZmIHs"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="sc-1wag0ht-0 kBtgKC"><use href="#thumbsUpIcon"></use></svg></div><div class="sc-1wag0ht-1 iUqdTV"><span class="sc-1wag0ht-2 sc-1wag0ht-3 hEtgR jhrTfi">4.5K</span><span class="sc-1wag0ht-2 sc-1wag0ht-4 hEtgR jWGbzI">Dislike</span></div></button></div></div><div style="display: contents;"><button class="sc-1wag0ht-6 jwXhHc"><div class="sc-1wag0ht-5 cwcbpr"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="sc-1wag0ht-0 iqLrJG"><use href="#reportIcon"></use></svg></div><div class="sc-1wag0ht-1 iUqdTV"><span class="sc-1wag0ht-2 sc-1wag0ht-3 hEtgR jhrTfi"></span><span class="sc-1wag0ht-2 sc-1wag0ht-4 hEtgR jWGbzI">Report a bug</span></div></button></div><div style="display: contents;"><button class="sc-1wag0ht-6 jwXhHc"><div class="sc-1wag0ht-5 cwcbpr"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="sc-1wag0ht-0 iqLrJG"><use href="#enterFullscreenIcon"></use></svg></div><div class="sc-1wag0ht-1 iUqdTV"><span class="sc-1wag0ht-2 sc-1wag0ht-3 hEtgR jhrTfi"></span><span class="sc-1wag0ht-2 sc-1wag0ht-4 hEtgR jWGbzI">Fullscreen</span></div></button></div><div class="sc-1thi3bz-4 jXwOyX"><svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" class="sc-1thi3bz-2 eCXtJW"><use href="#favIcon"></use></svg><div class="sc-1thi3bz-5 loDfMJ"><h2>We’ll be back after this short break</h2><p>Preparing...</p></div></div></div></div></div></div>
        `
    }
}