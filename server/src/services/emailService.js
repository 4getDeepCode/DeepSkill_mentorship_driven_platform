const mentorBookingRequestEmail = ({
  mentorName,
  studentName,
  serviceName,
  date,
  time,
}) => {
  return `
    <h2>New Booking Request</h2>
    <p>Hi ${mentorName},</p>
    <p>You have a new booking request.</p>

    <ul>
      <li><strong>Student:</strong> ${studentName}</li>
      <li><strong>Service:</strong> ${serviceName}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Time:</strong> ${time}</li>
    </ul>

    <p>Please log in to approve or reject this booking.</p>
  `;
};

const studentBookingApprovedEmail = ({
  studentName,
  mentorName,
  serviceName,
  date,
  time,
}) => {
  return `
    <h2>Booking Approved 🎉</h2>
    <p>Hi ${studentName},</p>

    <p>Your booking has been approved by <strong>${mentorName}</strong>.</p>

    <ul>
      <li><strong>Service:</strong> ${serviceName}</li>
      <li><strong>Date:</strong> ${date}</li>
      <li><strong>Time:</strong> ${time}</li>
    </ul>

    <p>We wish you a great session!</p>
  `;
};

module.exports = {
  mentorBookingRequestEmail,
  studentBookingApprovedEmail,
};
