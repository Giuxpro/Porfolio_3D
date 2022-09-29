require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const {EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT} = process.env;
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure:false,
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'albertogiusepp@gmail.com',
    subject: "Contact Form Submission - Portfolio 3D",
    html: `<p>Hola Alberto tienes un nuevo mensaje de:</p>
           <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
