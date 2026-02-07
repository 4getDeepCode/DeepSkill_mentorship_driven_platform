const paymentSuccessEmail = ({
  studentName,
  mentorName,
  serviceName,
  amount,
  date,
  time,
}) => {
  return `
    <h2>Payment Successful ✅</h2>
    <p>Hi ${studentName},</p>

    <p>Your payment has been received successfully.</p>

    <ul>
      <li><strong>Mentor:</strong> ${mentorName}</li>
      <li><strong>Service:</strong> ${serviceName}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Time:</strong> ${time}</li>
      <li><strong>Amount Paid:</strong> ₹${amount}</li>
    </ul>

    <p>We wish you a great session 🎉</p>
  `;
};

module.exports = {
  paymentSuccessEmail,
};
