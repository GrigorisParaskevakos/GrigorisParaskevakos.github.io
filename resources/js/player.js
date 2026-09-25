/**
 * mp3 player Obj
 * Plays the melody of a project (<audio id> named by data-track in index.html)
 * and drives the sound toggle in the footer. Music stays off until the visitor
 * turns it on, and that choice is remembered.
 */
class Player {
    constructor(button, defaultMelody) {
        this.button = button;
        this.current = null;
        this.defaultMelody = defaultMelody; // played if sound is turned on before any project
        this.enabled = Player.readSetting() === 'on';

        button.addEventListener('click', () => this.setEnabled(!this.enabled));
        for (const track of document.querySelectorAll('audio')) {
            track.addEventListener('playing', () => this.render());
            track.addEventListener('pause', () => this.render());
            track.addEventListener('ended', () => this.render());
        }
        this.render();
    }

    play(melody) {
        const track = document.getElementById(melody);
        if (!track) {
            console.log("No melody for playback...");
            return;
        }
        if (this.current && this.current !== track) {
            this.current.pause();
        }
        this.current = track;
        track.currentTime = 0;
        if (this.enabled) {
            this.start(track);
        }
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        Player.saveSetting(enabled ? 'on' : 'off');
        if (enabled && !this.current) {
            this.current = document.getElementById(this.defaultMelody);
        }
        if (this.current) {
            enabled ? this.start(this.current) : this.current.pause();
        }
        this.render();
    }

    start(track) {
        track.volume = 0.6;
        // play() rejects when the browser blocks audio; the toggle still works then
        track.play().catch(e => console.log("Playback blocked:", e.message));
    }

    render() {
        const playing = !!this.current && !this.current.paused;
        this.button.setAttribute('aria-pressed', String(this.enabled));
        this.button.title = this.enabled ? 'Music on' : 'Music off';
        this.button.classList.toggle('is-playing', playing);
    }

    // localStorage can be unavailable (private mode, blocked storage)
    static readSetting() {
        try {
            return localStorage.getItem('sound');
        } catch (e) {
            return null;
        }
    }

    static saveSetting(value) {
        try {
            localStorage.setItem('sound', value);
        } catch (e) {
            // not remembered, but the toggle still works for this visit
        }
    }
}
