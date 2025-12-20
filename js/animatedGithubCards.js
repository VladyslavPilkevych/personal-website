(function(){
  const holder = document.querySelector('.grid-lines_cursor-position');
  if(!holder) return;

  let tx=0, ty=0, x=0, y=0;

  const onMove = (e) => {
    const p = (e.touches && e.touches[0]) || e;
    tx = p.clientX; ty = p.clientY;
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });

  function raf(){
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    holder.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(raf);
  }
  raf();
})();
