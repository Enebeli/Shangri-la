document.addEventListener('DOMContentLoaded', function() {
  var resType = document.getElementById('res-type');
  var sectionIds = ['res-room', 'res-spa', 'res-dining', 'res-activity'];
  var sections = sectionIds.map(function(id) { return document.getElementById(id); });

  function showSection() {
    var choice = resType.value;
    sections.forEach(function(sec) {
      sec.style.display = (sec.id === 'res-' + choice) ? 'block' : 'none';
    });
  }

  if (resType) {
    resType.onchange = showSection;
    showSection();
  }

  var form = document.querySelector('.reservation-form');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var card = document.querySelector('.reservation-card');
      card.innerHTML = '<h2>Thank you for your reservation!</h2><p>We appreciate you booking with us and will be in touch shortly.</p>';
    };
  }
})