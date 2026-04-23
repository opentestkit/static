/* Open Test Kit — component behaviours
   static.opentestkit.org/style/components.js

   Usage: <script src="https://static.opentestkit.org/style/components.js" defer></script> */

/* ─── Copy button on <pre> blocks ───────────────────────────────────────── */

document.querySelectorAll('pre').forEach(pre => {
  const wrap = document.createElement('div');
  wrap.className = 'pre-wrap';
  pre.replaceWith(wrap);
  wrap.appendChild(pre);

  const btn = document.createElement('button');
  btn.className = 'btn btn-ghost btn-sm copy-btn';
  btn.textContent = 'copy';
  btn.addEventListener('click', () => {
    const text = (pre.querySelector('code') ?? pre).innerText;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
  wrap.appendChild(btn);
});
