const userDeviceInfo = (id) => {
    const $id = document.getElementById(id)
    const isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|iod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        any(){
            return this.android() || this.ios() || this.windows()
        } 
    }
    const isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i), 
        windows: () => navigator.userAgent.match(/windows nt/i), 
        any(){
            return this.linux() || this.mac() || this.windows()
        }
    }
    const isBrowser = { 
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera/i), 
        edge: () => navigator.userAgent.match(/edg/i),
        epic: () => navigator.userAgent.match(/epic browser/i),
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        any: function(){
            return this.firefox() || this.opera() || this.edge() || this.epic() || this.chrome() || this.safari()
        }
    }
    // console.log(isDesktop.windows())

    $id.innerHTML = `
    <ul>
    <li>User Agent: <b>${navigator.userAgent}</b></li>
    <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`

    if(isBrowser.edge()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>` 
    }

    
    

}
export default userDeviceInfo


console.log(navigator.userAgent)