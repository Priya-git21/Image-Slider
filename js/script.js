let num = 0;
let slides = document.getElementsByClassName("slide");
slideshow(num);

let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener('click', function () {
    if (num>0) {
        num--;
    } else {
        num = slides.length - 1;
    }
    slideshow(num);
});
right.addEventListener('click', function () {
    if (num < slides.length - 1) {
        num++;
    }
    else {
        num = 0;
    }
    slideshow(num);
});

function slideshow(n) {
    for (let im of slides) {
        im.style.display = "none";
    }
    slides[n].style.display = "block";
}