const studentZoomEmail = ({ studentName, joinUrl }) => `
  <h2>Zoom Session Confirmed 🎥</h2>
  <p>Hi ${studentName},</p>
  <p>Your session is scheduled.</p>
  <p>
    <a href="${joinUrl}" target="_blank">
     Join Zoom Meeting
    </a>
  </p>
`;

const mentorZoomEmail = ({ mentorName, startUrl }) => `
  <h2>Your Session Is Ready 🎥</h2>
  <p>Hi ${mentorName},</p>
  <p>
    <a href="${startUrl}" target="_blank">
      👉 Start Zoom Meeting
    </a>
  </p>
`;

module.exports = {
  studentZoomEmail,
  mentorZoomEmail,
};
