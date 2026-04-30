import nodemailer from "nodemailer";

export const sendEmail = async (data: {
  name: string;
  email: string;
  mobile: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // 📩 Email to CLIENT (you for now)
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.CLIENT_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Mobile:</b> ${data.mobile}</p>
      <p><b>Message:</b> ${data.message}</p>
    `
  });

  // 📩 Auto reply to USER
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "We received your message",
    html: `
      <h3>Hello ${data.name},</h3>
      <p>Thanks for contacting us. We will get back to you soon.</p>
    `
  });
};