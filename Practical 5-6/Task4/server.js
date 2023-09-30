const nodemailer = require("nodemailer");

async function sendEmail() {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "d22it207@charusat.edu.in", // Use your email here
        pass: "uqavkcpgyjorufhl", // Use your password here
      },
    });

    let mailDetails = {
      from: "d22it207@charusat.edu.in", // Use your email here
      to: "d22it207@charusat.edu.in", // Use the recipient's email here
      subject: "Node Mail",
      text: "Node.js testing mail",
      attachments: [
        {
          filename: "text1.txt",
          content: "Hello World",
        },
      ],
    };

    const info = await mailTransporter.sendMail(mailDetails);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Error Occurs:", error);
  }
}

sendEmail();
