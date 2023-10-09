const Btn = document.getElementById('btn');

Btn.addEventListener('click', ()=>{
  const Text =document.getElementById('text');
  setTimeout(()=>{
    Text.textContent ='ボタンがクリックされました';
  },2000);
});