var slideNumber = 0;
var prevSection = document.getElementById(0);

window.addEventListener('wheel', function (event) {

    if (event.deltaY < 0) {
        if (slideNumber <= 0) {
            return
        }
        else {
            slideNumber -= 1;
            document.getElementById(slideNumber).scrollIntoView({ behavior: "smooth" });
            prevSection.className = '';
            document.getElementById(slideNumber).className = 'active';
            prevSection = document.getElementById(slideNumber);
        }
    }
    else if (event.deltaY > 0) {
        if (slideNumber >= 6) {
            return
        }
        else {
            slideNumber += 1;
            document.getElementById(slideNumber).scrollIntoView({ behavior: "smooth" });
            prevSection.className = '';
            document.getElementById(slideNumber).className = 'active';
            prevSection = document.getElementById(slideNumber);
        }
    }
});

document.body.addEventListener('wheel', function (e) { e.preventDefault(); }, { passive: false });