const movies = require('./movies')

module.exports = {
    getMovies:(req,res)=>{
        res.send(movies)
    }
}