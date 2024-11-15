import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services like Outlook, Yahoo, etc.
      auth: {
        user: "mtayyab0112@gmail.com", // Your email address (from .env.local)
        pass: "uwgo xdki csyb bojn", // Your email password (from .env.local)
      },
    });

    const mailOptions = {
      from: email,
      to: "mtayyab0112@gmail.com",
      subject: "New Enquiry from Your Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
