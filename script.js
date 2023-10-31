const currentLocation = window.location;
const urlParams = new URLSearchParams(window.location.search);

console.log(window.location.pathname);

const redirectAlt = () => {
    document.body.style.cursor = 'wait';
    switch (currentLocation.pathname) {
        case "/search":
        case "/search.html":
            const q = urlParams.get(`q`);
            if (q == null)
                window.location.href = "https://search.bus-hit.me/";
            window.location.href = `https://search.bus-hit.me/search?q=${q}`;
            break;

        case "/watch":
        case "/watch.html":
            const v = urlParams.get(`v`);
            if (v == null)
                window.location.href = "https://piped.video/"
            window.location.href = `https://piped.video/watch?v=${v}`;
            break;

        default:
            alert("Can't detect what type of service you're trying to access or no alternative has been found... Please contact the administrator for more info...");
            document.body.style.cursor = 'default';
            break;
    }
}

const redirectDiscord = () => {
    document.body.style.cursor = 'wait';
    window.location.href = "https://discord.gg/Uvku8Nk6ed";
}