
    // const express = require('express');
    // const router = express.Router();
    // const twilio = require('twilio');
    // require('dotenv').config();

    // const twilioClient = twilio(process.env.TWILIO_USER, process.env.TWILIO_AUTH_TOKEN);

    // router.post('/contact', async (req, res) => {
    // let data = req.body;
    // if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    //     return res.json({ msg: "Please fill all the fields" });
    // }

    // try {
    //     // WhatsApp message functionality
    //     await twilioClient.messages.create({
    //         body: `New message from ${data.name} (${data.email}): ${data.message}`,
    //         from: 'whatsapp:+14155238886',
    //         to: 'whatsapp:+918968796492'
            
    //     });

    //     console.log("WhatsApp message sent successfully");
    //     res.status(200).json({ msg: "Thank You for Contacting Me" });
    // } catch (error) {
    //     console.error('Error sending WhatsApp message:', error);
    //     res.status(500).json({ msg: "There was a server error" });
    // }
    // });

    // module.exports = router;
    const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const bodyParser = require('body-parser');
const { runMiddleware } = require('./middleware');

const twilioClient = twilio(process.env.TWILIO_USER, process.env.TWILIO_AUTH_TOKEN);

// Middleware to parse JSON bodies
const jsonParser = bodyParser.json();

router.post('/contact', async (req, res) => {
  try {
    await runMiddleware(req, res, jsonParser);
    
    let data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    // WhatsApp message functionality
    await twilioClient.messages.create({
      body: `New message from ${data.name} (${data.email}): ${data.message}`,
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+918968796492'
    });

    console.log("WhatsApp message sent successfully");
    return res.status(200).json({ msg: "Thank You for Contacting Me" });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ msg: "There was a server error" });
  }
});

module.exports = router;
