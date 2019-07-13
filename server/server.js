const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movies/:searchMovie', (req, res) => {
  const title = req.params.searchMovie;
  return axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`)
    .then((response) => {
      res.send(response.data).status(200);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/movie/:id', (req, res) => {
  const movieId = req.params.id;
  return axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${process.env.OMDB_API_KEY}`)
    .then((response) => {
      res.send(response.data).status(200);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

module.exports = app;
