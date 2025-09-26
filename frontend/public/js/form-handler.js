document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const otpSection = document.getElementById('otpSection');
  const phoneInput = document.getElementById('phone');
  const otpInput = document.getElementById('otp');

  let otpVerified = false;

  sendOtpBtn.addEventListener('click', async () => {
    const phone = phoneInput.value.trim();
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const result = await response.json();
      if (response.ok) {
        alert('OTP sent successfully. Please check your phone.');
        otpSection.style.display = 'flex';
      } else {
        alert('Error sending OTP: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error sending OTP: ' + error.message);
    }
  });

  verifyOtpBtn.addEventListener('click', async () => {
    const phone = phoneInput.value.trim();
    const otp = otpInput.value.trim();
    if (!otp) {
      alert('Please enter the OTP.');
      return;
    }

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp })
      });
      const result = await response.json();
      if (response.ok) {
        alert('OTP verified successfully.');
        otpVerified = true;
        otpSection.style.display = 'none';
        sendOtpBtn.disabled = true;
        phoneInput.disabled = true;
      } else {
        alert('OTP verification failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error verifying OTP: ' + error.message);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      alert('Please verify your phone number with OTP before submitting.');
      return;
    }

    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: phoneInput.value.trim(),
      date: form.date.value,
      message: form.message.value.trim(),
    };

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Booking successful! Thank you.');
        form.reset();
        otpVerified = false;
        sendOtpBtn.disabled = false;
        phoneInput.disabled = false;
        otpSection.style.display = 'none';
        otpInput.value = '';
      } else {
        alert('Error: ' + (result.error || 'Failed to submit booking.'));
      }
    } catch (error) {
      alert('Error submitting form: ' + error.message);
    }
  });
});
