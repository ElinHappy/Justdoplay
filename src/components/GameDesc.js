import { Component } from "../core/heropy";

export default class GameDesc extends Component {

    constructor(props) {
        console.log(props)
        super({
            props
        })
    }

    render() {

        const { cur_game } = this.props

        this.el.classList.add('game-desc')
        this.el.innerHTML = /* html */ `
        <article class="npmo3Vk8vdpOrUnRlo4K">
        <nav class="cate-navi">
            <ul>
                <li><a href="/">Games</a></li>
                <li><a href="/en/shooting">${cur_game.category} Games</a></li>
            </ul>
            <h2 class="cate-title">${cur_game.title}</h2>
        </nav>
        <div class="cate-desc">
            <p>
                ${cur_game.description}
            </P>
            
            <p>
                Expensive video game consoles aren’t the only place to play marksmanship games. Our collection of shooting games are all free to play and available right now, on your computer. Play as a variety of marksmen in tons of
                environments, sneaking through levels and firing at any enemies in your path. Create classes with all kinds of different guns. Play as a futuristic assassin with ultra-modern weapons or go back in time and re-live the Doom game
                series. In our shooting challenges, you can holster your weapon as a solo player or unleash ammo as a member of a multiplayer task force. The possibilities are endless.
            </p>
            <p>
                Play now our online Shooting Games for free on your PC. You can play the Shooting Games in your browser without having to download them. Most of our games can also be played on a mobile phone or tablet. Have fun playing the best
                shooters here on Poki!
            </p>
            <h3>How to play Shooting Games?</h3>
            <p>All our shooting can be controlled with keyboard and mouse. First look into the description of the games, often you can find the controls there. Else these are the most commonly used controls for the PC:
            Some of the shooting games can also be played on a mobile phone or tablet. Then you control everything with your touchscreen.
            </p>
            <ul>
                <li>WASD - Move Around</li>
                <li>Mouse - Aim</li>
                <li>Left Mouse Click - Shoot</li>
                <li>Right Mouse Click - Zoom In</li>
                <li>Spacebar - Jump</li>
                <li>Shift - Sprint</li>
                <li>R - Reload</li>
            </ul>
            
            <p></p>
        </div>
        <h3>What are the best free Shooting Games online?</h3>
        <ol class="sc-16uwngq-1 dquIfs">
            <li><a href="/en/g/battle-forces">Battle Forces</a></li>
            <li><a href="/en/g/venge-io">Venge.io</a></li>
            <li><a href="/en/g/narrow-one">Narrow.One</a></li>
            <li><a href="/en/g/stick-merge">Stick Merge</a></li>
            <li><a href="/en/g/combat-reloaded">Combat Reloaded</a></li>
            <li><a href="/en/g/stick-defenders">Stick Defenders</a></li>
            <li><a href="/en/g/repuls-io">Repuls.io</a></li>
            <li><a href="/en/g/combat-reloaded-2">Combat Reloaded 2</a></li>
            <li><a href="/en/g/combat-online">Combat Online</a></li>
            <li><a href="/en/g/blockpost">Blockpost</a></li>
        </ol>
        <h3>What are the most popular Shooting Games for the mobile phone or tablet?</h4>
        <ol class="sc-16uwngq-1 dquIfs">
            <li><a href="/en/g/venge-io">Venge.io</a></li>
            <li><a href="/en/g/narrow-one">Narrow.One</a></li>
            <li><a href="/en/g/stick-merge">Stick Merge</a></li>
            <li><a href="/en/g/combat-reloaded">Combat Reloaded</a></li>
            <li><a href="/en/g/stick-defenders">Stick Defenders</a></li>
        </ol>
        </article>
        `
    }
}
