// netlify/newsProxy.js

const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
