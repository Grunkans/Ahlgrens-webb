require("dotenv").config(); 
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});


app.post("/send-email", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: "Från kontaktformulär",
        text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nMeddelande: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "E-post skickad!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Något gick fel.", error });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Servern körs på port ${PORT}`));