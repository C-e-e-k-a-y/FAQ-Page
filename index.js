function toggle(b, d) {
    var img = document.getElementById(b)
    var text = document.getElementById(d)
    if (img.getAttribute('src') == "images/icon-plus.svg") {
        img.setAttribute('src', 'images/icon-minus.svg');
        img.setAttribute('alt', 'minus');
        text.style.display = 'block';
    }
    else {
        img.setAttribute('src', 'images/icon-plus.svg');
        img.setAttribute('alt', 'plus');
        text.style.display = 'none';
    }
}