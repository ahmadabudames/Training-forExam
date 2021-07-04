'use strict';

const artPecies = require('../models/art.mongoose.model');


const createNewArt = async (req, res) => {
    const {
        title,
        thumbnail,
        artist_title,
        description
    } = req.body;


    const slug = title.toLowerCase().split(' ').join('-');
    artPecies.find({ slug: slug }, (error, data) => {
        if (data.length > 0) {
            res.send('we have it')
        } else {
            const newArtPecies = new artPecies({
                title: title,
                slug: slug,
                thumbnail: thumbnail,
                artist_title: artist_title,
                description: description
            });
            newArtPecies.save();
            res.send(newArtPecies);
        }
    })
}



const getNewArt = async (req, res) => {
    artPecies.find({}, (error, data) => {
        res.send(data);
    })
};

const deleteNewArt = async (req, res) => {
    const slug = req.params.slug;
    artPecies.remove({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {

            res.send(data);
        }
    });
}

const updateNewArt = async (req, res) => {
    const { description } = req.body;
    const slug = req.params.slug;
    artPecies.find({slug:slug}, (error, data) => {
        if (error) {
            res.send(error);
        } else {

            data[0].description=description;
            data[0].save();
            res.send(data);
        }
    })

};

module.exports = {
    createNewArt,
    getNewArt,
    deleteNewArt,
    updateNewArt


}