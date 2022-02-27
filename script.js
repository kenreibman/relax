const circle = document.querySelector('#circle');
const instructions = document.querySelector('.instructions');

// Grow / Shrink Circle

const growCircle = () => {
  circle.classList.add('hover');
  setTimeout(() => {
    circle.classList.remove('hover');
  }, 8000);
  setTimeout(growCircle, 16000);
};

// Breathing Instructions
const breatheText = () => {
  instructions.innerText = 'Breathe In';
  setTimeout(() => {
    instructions.innerText = 'Hold...';
    setTimeout(() => {
      instructions.innerText = 'Breathe Out';
    }, 4000);
  }, 4000);

  setTimeout(breatheText, 16000);
};
// Start breathing
circle.addEventListener('click', () => {
  growCircle();
  breatheText();
});
