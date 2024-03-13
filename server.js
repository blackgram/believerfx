// server.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3001;
const NEWS_API_KEY = '828c109c04764c629d50554e625ed2a3'; 
const cors = require('cors')

app.use(express.json());

const corsOptions = {
  origin: '*', // Allow all origins for development, adjust for production
  methods: ['GET', 'POST'], // Allow GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow Content-Type and Authorization headers
  credentials: true, // Allow credentials (e.g., cookies)
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'], // Expose additional headers if needed
};

app.use(cors(corsOptions));

app.get('/fetch-news', async (req, res) => {
  try {

    const currentDate = new Date().toISOString().split('T')[0];
    const oneMonthDate = new Date()
    oneMonthDate.setMonth(oneMonthDate.getMonth() - 1)
    const newOneMonthDate = oneMonthDate.toISOString().split('T')[0]


    const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin|crypto|trading|ethereum|stock&from=${newOneMonthDate}&to=${currentDate}&language=en&sortBy=relevancy&page=1`, {
      headers: {
        'Authorization': `Bearer ${NEWS_API_KEY}`
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
