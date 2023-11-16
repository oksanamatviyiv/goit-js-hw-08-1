import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const formData = { email: '', message: '' };

  const saveAndLogData = () => {
    formData.email = form.email.value;
    formData.message = form.message.value;
    console.log('Form data:', formData);
  };
    
  const throttledSaveAndLogData = throttle(saveAndLogData, 500);

  form.email.addEventListener('input', throttledSaveAndLogData);
  form.message.addEventListener('input', throttledSaveAndLogData);

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);

    form.email.value = '';
    form.message.value = '';
    formData.email = '';
      formData.message = '';
      
    localStorage.removeItem('feedback-form-state');
  });
});
