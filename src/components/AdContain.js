import { Component } from "../core/heropy";

export default class AdContain extends Component{
    constructor(bannerZone) {
        //console.log(bannerZone)
        super()
        this.bannerZone = bannerZone
        //console.log(this.bannerZone )
        this.render(this.bannerZone)

    }

    render (bz = 'gameplay-bottom-banner'){
        this.el.classList.add(this.bannerZone)

        if ( this.bannerZone === 'gameplay-bottom-banner' && this.bannerZone !== undefined) {
            this.el.innerHTML = /* html */ `
            <div class="sc-tbf0fc-0 gqnFJQ sc-al88rd-7 pAock"><div width="728" height="90" class="sc-tbf0fc-1 bioerJ"><div class="sc-tbf0fc-3 eDhvMX" style="height: 90px; width: 728px; overflow: hidden;"><div id="/21682198607/desktop_gp_728x90/3_desktop_gp_728x90" style="height: 90px; width: 728px; overflow: hidden;" data-poki-ad-id="poki-ZSYmj_Wu0ww280_Wfj-4WA"><div id="poki-ZSYmj_Wu0ww280_Wfj-4WA" class="poki-ad-slot" data-poki-ad-size="728x90" style="width: 728px; height: 90px; overflow: hidden; position: relative;" data-google-query-id="CP_smZGW7YEDFdXUFgUdTD8A-Q"><div id="google_ads_iframe_/21682198607/desktop_gp_728x90/3_desktop_gp_728x90_14__container__" style="border: 0pt none; display: inline-block; width: 728px; height: 90px;"><iframe frameborder="0" src="https://5cffe349cd0dfe0e60e92efceda9ffa4.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html" id="google_ads_iframe_/21682198607/desktop_gp_728x90/3_desktop_gp_728x90_14" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="728" height="90" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="v" style="border: 0px; vertical-align: bottom; width: 728px; height: 90px;" data-load-complete="true"></iframe></div></div></div></div><div width="728" height="90" class="sc-tbf0fc-2 keJcxs">Advertisement</div></div></div>
            `
        } else if ( this.bannerZone === 'gameplay-right-banner' && this.bannerZone !== undefined) {
            this.el.innerHTML = /* html */ `
            <div class="sc-tbf0fc-0 gqnFJQ sc-al88rd-8 jxmECU"><div width="300" height="250" class="sc-tbf0fc-1 iFmTCx"><div class="sc-tbf0fc-3 eDhvMX" style="height: 250px; width: 300px; overflow: hidden;"><div id="/21682198607/desktop_gp_300x250/3_desktop_gp_300x250" style="height: 250px; width: 300px; overflow: hidden;" data-poki-ad-id="poki-ZSYmj70OG4N1sZyqY3TW9g"><div id="poki-ZSYmj70OG4N1sZyqY3TW9g" class="poki-ad-slot" data-poki-ad-size="300x250" data-google-query-id="CNj1j5GW7YEDFSXUFgUdGzgD2A" style="width: 300px; height: 250px; overflow: hidden; position: relative;"><div id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" name="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" data-load-complete="true" data-google-container-id="u"></iframe></div></div></div></div><div width="300" height="250" class="sc-tbf0fc-2 iZJgLq">Advertisement</div></div></div>
            <div class="sc-tbf0fc-0 gqnFJQ sc-al88rd-9 SpDdJ"><div width="160" height="600" class="sc-tbf0fc-1 iFmTCx"><div class="sc-tbf0fc-3 eDhvMX" style="height: 600px; width: 160px; overflow: hidden;"><div id="/21682198607/desktop_gp_160x600/3_desktop_gp_160x600" style="height: 600px; width: 160px; overflow: hidden;" data-poki-ad-id="poki-ZSYmj19zOF3ajF6RRGkDJw"><div id="poki-ZSYmj19zOF3ajF6RRGkDJw" class="poki-ad-slot" data-poki-ad-size="160x600" style="width: 160px; height: 600px; overflow: hidden; position: relative;" data-google-query-id="CJXX04CE7oEDFQmblgodW3kFfA"><div id="google_ads_iframe_/21682198607/desktop_gp_160x600/3_desktop_gp_160x600_1__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/21682198607/desktop_gp_160x600/3_desktop_gp_160x600_1" name="google_ads_iframe_/21682198607/desktop_gp_160x600/3_desktop_gp_160x600_1" title="3rd party ad content" width="160" height="600" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="w"></iframe></div></div></div></div><div width="160" height="600" class="sc-tbf0fc-2 iZJgLq">Advertisement</div></div></div>
            `
        }
        //this.el.appendAFTER(strhtml)
        //this.el.insertAdjacentHTML('beforeend',strhtml)
        //this.makeBanner()
    }
//        <div class="gameplay-right-banner"><div class="sc-tbf0fc-0 gqnFJQ sc-al88rd-8 jxmECU"><div width="300" height="250" class="sc-tbf0fc-1 iFmTCx"><div class="sc-tbf0fc-3 eDhvMX" style="height: 250px; width: 300px; overflow: hidden;"><div id="/21682198607/desktop_gp_300x250/3_desktop_gp_300x250" style="height: 250px; width: 300px; overflow: hidden;" data-poki-ad-id="poki-ZSYmj70OG4N1sZyqY3TW9g"><div id="poki-ZSYmj70OG4N1sZyqY3TW9g" class="poki-ad-slot" data-poki-ad-size="300x250" data-google-query-id="CNj1j5GW7YEDFSXUFgUdGzgD2A" style="width: 300px; height: 250px; overflow: hidden; position: relative;"><div id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" name="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" data-load-complete="true" data-google-container-id="u"></iframe></div></div></div></div><div width="300" height="250" class="sc-tbf0fc-2 iZJgLq">Advertisement</div></div></div></div>

    makeBanner() {
        const strhtml = /* html */ `
            <div class="gameplay-right-banner"><div class="sc-tbf0fc-0 gqnFJQ sc-al88rd-8 jxmECU"><div width="300" height="250" class="sc-tbf0fc-1 iFmTCx"><div class="sc-tbf0fc-3 eDhvMX" style="height: 250px; width: 300px; overflow: hidden;"><div id="/21682198607/desktop_gp_300x250/3_desktop_gp_300x250" style="height: 250px; width: 300px; overflow: hidden;" data-poki-ad-id="poki-ZSYmj70OG4N1sZyqY3TW9g"><div id="poki-ZSYmj70OG4N1sZyqY3TW9g" class="poki-ad-slot" data-poki-ad-size="300x250" data-google-query-id="CNj1j5GW7YEDFSXUFgUdGzgD2A" style="width: 300px; height: 250px; overflow: hidden; position: relative;"><div id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" name="google_ads_iframe_/21682198607/desktop_gp_300x250/3_desktop_gp_300x250_14" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" style="border: 0px; vertical-align: bottom; width: 300px; height: 250px;" data-load-complete="true" data-google-container-id="u"></iframe></div></div></div></div><div width="300" height="250" class="sc-tbf0fc-2 iZJgLq">Advertisement</div></div></div></div>
        `
        this.el.innerHTML = this.el.outerHTML + strhtml
        console.log(this.el.outerHTML)
        /*
        const gamesEl = this.el.querySelector('.games')

        gamesEl.append(strHtml)
        //this.el.classList.add('gameplay-right-banner')
        //this.el.innerHTML 
        */
    }
}