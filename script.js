let i = getCookieValue("counter") || 0;
document.getElementById("number").innerHTML = i; 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function increase() {
    i++;
    updateCounter();
}

function decrease() {
    if (i !== 0) {
        i--;
        updateCounter();
    }
}

function reset() {
    i = 0;
    updateCounter();
}

function random() {
    i = getRandomInt(100);
    updateCounter();
}

function updateCounter() {
    document.getElementById("number").innerHTML = i;
    document.cookie = `counter=${i}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;`;
}

function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            return parseInt(value);
        }
    }
    return null;
}
