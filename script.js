const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  card.addEventListener('mousemove', () => {
    card.style.boxShadow = '0 0 30px rgba(255,140,0,0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });

});

const topBtn = document.getElementById('topBtn');



topBtn.addEventListener('click', () => {

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

});