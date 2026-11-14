
const section = document.getElementById('video-ventilador');
const vid = section?.querySelector('video')

vid?.pause()
console.log("vid duration:", vid.duration);

// Add passive option for touch events 

const scroll = () => {

  const distance = window.scrollY - section.offsetTop
  console.log(distance);
  const total = section.clientHeight - window.innerHeight

  let percentage = distance / total
  percentage = Math.max(0, percentage)
  percentage = Math.min(percentage, 1)

  window.requestAnimationFrame(() => {
    console.log( vid.currentTime );
    if ((vid.currentTime >= 17.0) && (distance > 3000)) {vid.currentTime = 17; console.log("DONE");}
  else if (vid?.duration > 0) {
    
    vid.currentTime = vid.duration * percentage;
  }})
}
window.addEventListener('scroll', scroll, { passive: true })
scroll(); 

