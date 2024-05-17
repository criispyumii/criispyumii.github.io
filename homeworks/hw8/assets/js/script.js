function toggleSongs() {
    let songs = document.getElementById("songs-second-half");
    songs.classList.toggle("hidden");
}

function hide() {
    let button = document.getElementById("toggle-button");
    button.classList.toggle("hidden");
}

document.getElementById("toggle-button").onclick = toggleSongs;