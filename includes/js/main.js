/**
 * Project links are plain <a target="_blank"> links (keyboard, middle-click
 * and "copy link" work); clicking one also picks its melody, which plays
 * when the sound toggle is on.
 */
document.addEventListener('DOMContentLoaded', () => {
    const mp3Player = new Player(document.querySelector('.sound'), 'ocean');

    for (const link of document.querySelectorAll('[data-track]')) {
        link.addEventListener('click', () => mp3Player.play(link.dataset.track));
    }

    // keeps the footer year current
    for (const year of document.querySelectorAll('[data-year]')) {
        year.textContent = new Date().getFullYear();
    }
});
