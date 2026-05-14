// ============================================
// products.js - Products page script
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Category filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');
      productCards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---- Product detail modal ----
  const detailModal = document.getElementById('productDetailModal');
  if (detailModal) {
    document.querySelectorAll('.product-card').forEach(function (card) {
      card.querySelector('.product-info').addEventListener('click', function () {
        const name = card.querySelector('.product-name').textContent;
        const desc = card.querySelector('.product-desc').textContent;
        const imgSrc = card.querySelector('.product-media img').src;
        const price = card.querySelector('.product-price') ? card.querySelector('.product-price').textContent : '';
        const moq = card.querySelector('.product-moq') ? card.querySelector('.product-moq').textContent : '';
        const tags = card.getAttribute('data-tags') || '';

        detailModal.querySelector('.product-detail-name').textContent = name;
        detailModal.querySelector('.product-detail-desc').textContent = desc;
        detailModal.querySelector('.product-detail-price').textContent = price;
        detailModal.querySelector('.product-detail-media img').src = imgSrc;

        const moqRow = detailModal.querySelector('.detail-moq');
        if (moqRow) moqRow.textContent = moq;

        const tagsEl = detailModal.querySelector('.product-tags');
        if (tagsEl && tags) {
          tagsEl.innerHTML = tags.split(',').map(function (t) {
            return '<span class="product-tag">' + t.trim() + '</span>';
          }).join('');
        }

        detailModal.classList.add('active');
      });
    });

    detailModal.querySelector('.product-detail-close').addEventListener('click', function () {
      detailModal.classList.remove('active');
    });

    detailModal.addEventListener('click', function (e) {
      if (e.target === detailModal) {
        detailModal.classList.remove('active');
      }
    });
  }

});
