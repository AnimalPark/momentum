const photos = [
    '0.jpeg',
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
]
const randomPhoto = photos[Math.floor(Math.random()*photos.length)];

document.body.style.backgroundImage = `url('img/${randomPhoto}')`;
document.body.style.backgroundSize  = "100%";

/*
const imgTag = document.createElement("img");
imgTag.src = `img/${randomPhoto}`;
document.appendChild(imgTag);
*/