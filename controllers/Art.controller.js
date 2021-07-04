'use strict'



const superagent = require('superagent');
const artModels = require('../models/art.model');

const getArtData = async (req, res) => {
    const url = 'http://api.artic.edu/api/v1/artworks';
    superagent.get(url).then(data => {
        const responseData = data.body.data.map(art => {

            return new artModels(art);
        })
        res.send(responseData);
    }).catch(error => {
        console.log('cccccccccc');
        console.log(error);
    })
};

module.exports = {
    getArtData
};