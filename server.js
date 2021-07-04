'use strict';

const express = require('express') // require the express package

const cors = require('cors');
const mongoose=require('mongoose');

require('dotenv').config();
const app = express() // initialize your express app instance
app.use(cors()) // after you initialize your express app instance
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/art', { 
    useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
});
const artic=require('./controllers/Art.controller');
const crud=require('./controllers/art.crud.controller')


const PORT=process.env.PORT

app.get('/art',artic.getArtData);


app.post('/art/fav',crud.createNewArt);
app.get('/art/fav',crud.getNewArt);
app.delete('/art/fav/:slug',crud.deleteNewArt);
app.put('/art/fav/:slug',crud.updateNewArt);
// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.listen(PORT) // kick start the express server to work


