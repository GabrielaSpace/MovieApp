const mongoose = require('mongoose');
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


/*
h1 Title: #{param.Title}
p Year: #{param.Year}
p Director: #{param.Director}
p Genre: #{param.Genre}
p Runtime: #{param.Runtime}
p Plot : #{param.Plot}
p Actors : #{param.Actors}
p Ratings: #{param.Ratings}
p Language : #{param.Language} */