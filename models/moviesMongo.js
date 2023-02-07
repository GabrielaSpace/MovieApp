/**
 * @author Javier Fuertes, Gabriela García y Pablo Mateos 
 * @exports Schema
 * @namespace SchemaMongo
 */


const mongoose = require('mongoose');
/**
 * Description: This function renders the search view
 * @memberof  SchemaMongo
 * @method  objectSchema
 * @property {String} title - Movie's title
 * @property {String} img - Movie's Image URL
 * @property {Number} year - Movie's Release year
 * @property {String} director - Movie's Director
 * @property {String} genre - Movie's Genre
 * @property {String} runtime - Movie's runtime
 * @property {String} plot - Movie's plot 
 * @property {String} actors - Movie's actors 
 * @property {String} language - Movie's language
 */

const objectSchema = {
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    runtime:{
        type: String,
        required: true
    },
    plot:{
        type: String,
        required: true
    },
    actors:{
        type: String,
        required: true

    }/*,
    ratings:{
        type: Object,
        required: true
    }*/,
    language:{
        type: String,
        required: true
    }

};

const movieSchema = mongoose.Schema(objectSchema);
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
