const PDFDocument = require("pdfkit");

const generateInvoice = (booking, res) => {
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=invoice_${booking._id}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(20).text("DeepSkill Invoice", { align: "center" });
  doc.moveDown();

  doc.text(`Invoice ID: ${booking._id}`);
  doc.text(`Student: ${booking.student.name}`);
  doc.text(`Mentor: ${booking.mentor.name}`);
  doc.text(`Service: ${booking.service.serviceName}`);
  doc.text(`Amount Paid: ₹${booking.payment.amount}`);
  doc.text(`Date: ${booking.slot.date}`);
  doc.text(
    `Time: ${booking.slot.startTime} - ${booking.slot.endTime}`
  );

  doc.end();
};

module.exports = generateInvoice;
