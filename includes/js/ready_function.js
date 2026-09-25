$(document).ready(function() {
    // Visitors who asked for less motion get the still picture
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    // <body> has no background image, so the plugin draws only the
    // light glints of the ripples, on top of the particles and below the photo.
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    } catch (e) {
        console.warn('Ripples disabled:', e); // e.g. no WebGL
    }
});
