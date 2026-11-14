
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");

const context = canvas.getContext("2d");
const ventElement = document.getElementById("vent");
let keyAttribute = "ventElement.accessKey";

console.log(ventElement);

let frameCount = 600;
  if (ventElement) {    
    keyAttribute = ventElement.accessKey;    
    console.log(keyAttribute);
    if(keyAttribute === "tsa") frameCount = 650
    if(keyAttribute === "tda") frameCount = 650
    if(keyAttribute === "rls") frameCount = 750
    if(keyAttribute === "home") frameCount = 800

  }

let imgArray = [];

const currentFrame = (index) => `../img/home/frames/webhd/${index.toString()}.webp`;

const preloadImages = () => {
    let j = 0;

        for (let i = 1; i < frameCount; i+=1) {
            const img = new Image();
            img.src = currentFrame(i);
            imgArray.push(img);
        }

};

const img = new Image();
img.src = imgArray[0];
console.log( window.innerWidth);
console.log( innerHeight);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight+15;

img.onload = function () {
    context.drawImage(img, 0, 0);
}; 

const updateImage = (index) => {
    console.log("img n°: ",index);

    console.log("img n°: ",imgArray[index]);

    // else
    (window.innerWidth <= 1450 ) ?
        context.drawImage(imgArray[index], 0, 0, 1920, 1080, 0, 5, canvas.width, canvas.height)
        : context.drawImage(imgArray[index], 0, 0, 2120, 1075, 0, 10, canvas.width, canvas.height)

};

window.addEventListener("scroll", () => {

    console.log(html.scrollTop);
    
    if(html.scrollTop >= 300 ) {

        const frameHeigh = document.getElementById("frame");
    const frameHeigh1 = frameHeigh.scrollHeight;
    console.log(frameHeigh1);

    const scrollTop = html.scrollTop - ((window.innerWidth <= 768) ? 380 : keyAttribute==="tsa" ? 1200 : 2600);

    console.log(html.scrollTop);
    console.log(scrollTop);

        console.log(html.scrollHeight);

    const maxScrollTop = 5748 - window.innerHeight;
    const scrollFraction = (scrollTop) / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    console.log(frameIndex);
    requestAnimationFrame(() => updateImage(frameIndex + 1));

    }
});

preloadImages();
