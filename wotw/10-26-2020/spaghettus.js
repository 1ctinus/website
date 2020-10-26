document.body.addEventListener("keydown", function (event) {
    const letter = event.key.toLowerCase();
    const code = letter.charCodeAt(0)
    if (event.key.length === 1 && code >= 65 && code <= 90) {
        window.location.replace(letter + ".html");
    }
});