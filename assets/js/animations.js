function loadProjectImage(id) {
    var el = document.getElementById(id);
    var theImg = el.getElementsByClassName('project-borders').getElementsByTagName('img');
    var imageToLoad;
    if (theImg.dataset.image) {
        imageToLoad = theImg.dataset.image;
    } else if (typeof theImg.currentSrc === 'undefined') {
        imageToLoad = theImg.src;
    } else {
        imageToLoad = theImg.currentSrc;
    }
    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            el.classList.add('is-loaded');
        };
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadProjectImage('project1');
});