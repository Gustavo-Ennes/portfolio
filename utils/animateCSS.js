
// identifying if it's a button or something else
const getAnimation = (classList) => {
  let animation = ''
  if(classList.contains('btn')){
    animation = (classList.contains('rolling') ? 'rollOut' : 'rollIn')
  }else{
    animation = (classList.contains("animate__zoom") ? 'zoomInDown' : 'backInUp')
  }

  return animation
}
  
// verify if the element is in the defined part of screen to animate it
let canAnimate = (el) => {
  return (
    el.getBoundingClientRect().bottom <= window.screen.height - 10 ||
    el.getBoundingClientRect().top < window.screen.height / 3 * 2
  )
}

// I dont remove the class 'animate' from a button 
// because I want that it animates agains when clicked
const removeClasses = (el, animation) => {
  if(!el.classList.contains("btn") || animation === 'rollOut'){
    el.classList.remove("animate", `animate__animated`, `animate__${animation}`)
  }else{
    el.classList.remove(`animate__${animation}`, 'animate__animated')
  }
}

let animate = (el) => {
  // We create a Promise and return it
  let willAnimate = canAnimate(el)

  let animation = getAnimation(el.classList)


  if(willAnimate || animation === 'rollOut'){

    new Promise((resolve) => {

      el.addEventListener('animationstart', () => {
        el.style.setProperty('visibility', 'visible')
      })

      el.style.setProperty('--animate-duration', '.8s');
      
      el.classList.add(`animate__animated`, `animate__${animation}`);


      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        removeClasses(el, animation);

        if(animation === 'rollIn'){
          el.addEventListener('click', () => {
            el.classList.add('rolling')
            animate(el);
          })
        }
        
        resolve('Animation ended');
      }

      el.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
  }
}

module.exports = animate