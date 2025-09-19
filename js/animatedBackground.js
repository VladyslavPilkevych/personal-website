import Grid1Background from './libs/grid1.cdn.min.js';

const canvas  = document.getElementById('webgl-canvas');
const section = document.querySelector('.intro-section');

// Initialize background
const bg = Grid1Background(canvas);

// Resize handling
const resize = () => {
  const rect = section.getBoundingClientRect();
  canvas.width  = rect.width;
  canvas.height = rect.height;
  if (bg?.onWindowResize) bg.onWindowResize();
};
window.addEventListener('resize', resize);
requestAnimationFrame(resize);

// Click → randomize colors and lights
section.addEventListener('click', () => {
  bg.grid.setColors([
    0xffffff * Math.random(),
    0xffffff * Math.random(),
    0xffffff * Math.random()
  ]);

  bg.grid.light1.color.set(0xffffff * Math.random());
  bg.grid.light1.intensity = 500 + Math.random() * 1000;

  bg.grid.light2.color.set(0xffffff * Math.random());
  bg.grid.light2.intensity = 250 + Math.random() * 250;
});

// Cleanup if needed
window.addEventListener('beforeunload', () => {
  if (bg?.renderer?.dispose) bg.renderer.dispose();
  window.removeEventListener('resize', resize);
});
