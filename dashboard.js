/* ---------- iframe protection ---------- */
function inFrame(){return window.self !== window.top;}
window.addEventListener('load',()=>{
  if(!inFrame()){ window.location.href = 'denied.html'; }
});

/* ---------- button download logic ---------- */
function downloadFile(e){
  e.preventDefault();
  const btn = e.currentTarget;

  // disable button
  btn.classList.add('disabled');
  btn.textContent = 'Starting download…';

  // create hidden link
  const link = document.createElement('a');
  link.href     = 'https://github.com/Artazzzz/downloadezwin/raw/main/EZWIN.zip';
  link.download = 'EZWIN.zip';
  document.body.append(link);
  link.click();
  link.remove();

  // progress reset after 5 s
  setTimeout(()=>{
    btn.classList.remove('disabled');
    btn.innerHTML = '<i class="fas fa-download"></i> Download';
  },5000);
}

/* ---------- ripple effect for all primary buttons ---------- */
document.addEventListener('click',e=>{
  const btn = e.target.closest('.btn-download');
  if(!btn) return;

  const ripple = document.createElement('span');
  const rect   = btn.getBoundingClientRect();
  const size   = Math.max(rect.width,rect.height);
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left  = (e.clientX - rect.left - size/2)+'px';
  ripple.style.top   = (e.clientY - rect.top  - size/2)+'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend',()=>ripple.remove());
});

/* ---------- reveal-on-scroll (one line) ---------- */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(el=>{
    if(el.isIntersecting){ el.target.classList.add('visible'); }
  });
},{threshold:.2});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
