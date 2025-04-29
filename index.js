// const express = require('express');
// const bodyParser = require('body-parser');
// const {SessionsClient} = require('@google-cloud/dialogflow-cx');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());

// // Create a Dialogflow CX client
// const client = new SessionsClient({
//   keyFilename: path.join(__dirname, 'service-account.json'),
// });


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  const tag = req.body.fulfillmentInfo.tag;

  let responseMessage = 'Default response';
  if (tag === 'web_tag') {
    responseMessage = ' https://interactai.in';
  }

  res.json({
    fulfillment_response: {
      messages: [{
        text: { text: [responseMessage] }
      }]
    }
  });
  app.listen(port, () => {
  console.log(`Server listening on port ${PORT}`);

});



// app.post('/webhook', async (req, res) => {
//   const { session_id, message } = req.body;

//   if (!message || !session_id) {
//     return res.status(400).send({ error: 'Missing session_id or message' });
//   }

//   const sessionPath = client.projectLocationAgentSessionPath(
//     process.env.PROJECT_ID,
//     process.env.LOCATION,
//     process.env.AGENT_ID,
//     session_id
//   );

//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         text: message,
//       },
//       languageCode: process.env.LANGUAGE_CODE,
//     },
//   };

// app.post('/webhook', async (req, res) => {
//     const body = req.body;
  
//     if (!body || !body.message || !body.user_id) {
//       return res.status(400).json({ error: 'Missing message or user_id in request body' });
//     }
  
//     const sessionId = body.user_id;
//     const userMessage = body.message;
  
//     // Your Dialogflow CX logic goes here
//     res.json({ reply: "You said: " + userMessage });
//   });

//   try {
//     const [response] = await client.detectIntent(request);
//     const reply = response.queryResult.responseMessages
//       .map(msg => msg.text?.text)
//       .flat()
//       .filter(Boolean)
//       .join(' ');

//     res.json({ reply: reply || 'No response from agent.' });
//   } catch (error) {
//     console.error('Dialogflow CX Error:', error);
//     res.status(500).send('Error communicating with Dialogflow CX');
//   }
// });


