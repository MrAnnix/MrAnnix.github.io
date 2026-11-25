// Adds `is-loaded` to the target element once the image has loaded (or failed), which starts
// its entry animation in _sass/_animations.scss. Listens to the <img> itself instead of
// preloading a copy, so `loading="lazy"` keeps working: a lazy image has no currentSrc yet
// when the DOM is ready.
function animateWhenLoaded(imageId, targetId) {
    var img = document.getElementById(imageId);
    var targetEl = document.getElementById(targetId);
    if (!img || !targetEl) {
        console.warn('animateWhenLoaded: element not found for id "' + (img ? targetId : imageId) + '"');
        return;
    }

    function markLoaded() {
        targetEl.classList.add('is-loaded');
    }

    if (img.complete) {
        markLoaded();
    } else {
        img.addEventListener('load', markLoaded, { once: true });
        // Still animate if the image fails, so the card does not stay unanimated
        img.addEventListener('error', markLoaded, { once: true });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateWhenLoaded('GeekMagScreenshot', 'GeekMag');
});
