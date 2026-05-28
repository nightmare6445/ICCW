// Animated stat counters on the homepage
document.querySelectorAll('.stat .num').forEach(el=>{
  const target=+el.dataset.target;
  if(!target) return;
  let n=0;
  const step=Math.max(1,Math.ceil(target/60));
  const tick=()=>{
    n+=step;
    if(n>=target){el.textContent=target;return;}
    el.textContent=n;
    requestAnimationFrame(tick);
  };
  // start when visible
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){tick();io.disconnect();}});
  });
  io.observe(el);
});

// Join form (front-end demo — no backend yet)
function handleJoin(e){
  e.preventDefault();
  document.getElementById('success').style.display='block';
  e.target.querySelector('button[type=submit]').textContent='Submitted ✓';
  e.target.querySelector('button[type=submit]').disabled=true;
  // To collect real submissions, point the form at a free service
  // like Formspree, Google Forms, or a Discord webhook (see README).
  return false;
}
