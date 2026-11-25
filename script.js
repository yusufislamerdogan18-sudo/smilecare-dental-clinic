const appointmentForm = document.querySelector('#appointment-form');
const appointmentDate = document.querySelector('#date');
if (appointmentDate) {
  const localToday = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
  appointmentDate.min = localToday;
}

if (appointmentForm) {
  appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#form-status').textContent = 'Thanks! Your demo request is ready. This sample website does not send it to the clinic; please call to confirm.';
    appointmentForm.reset();
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#contact-form-status').textContent = 'Thanks! This demo form does not send or save your message. Please contact the clinic by phone or email.';
    contactForm.reset();
  });
}

const specialtyDialog = document.querySelector('#specialty-dialog');
if (specialtyDialog) {
  const dialogImage = specialtyDialog.querySelector('#specialty-dialog-image');
  const dialogTitle = specialtyDialog.querySelector('#specialty-dialog-title');
  const dialogCaption = specialtyDialog.querySelector('#specialty-dialog-caption');

  document.querySelectorAll('[data-specialty-image]').forEach((button) => {
    button.addEventListener('click', () => {
      dialogImage.src = button.dataset.image;
      dialogImage.alt = button.querySelector('img').alt;
      dialogTitle.textContent = button.dataset.title;
      dialogCaption.textContent = button.dataset.caption;
      specialtyDialog.showModal();
    });
  });

  specialtyDialog.querySelector('.image-dialog-close').addEventListener('click', () => specialtyDialog.close());
  specialtyDialog.addEventListener('click', (event) => {
    if (event.target === specialtyDialog) specialtyDialog.close();
  });
}
