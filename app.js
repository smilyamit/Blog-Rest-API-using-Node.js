const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://netNinja1:ninja123@ninja1.5noee.mongodb.net/note-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true  })
 .then((result) => console.log("connected to db"))
 .catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs' )

//listen to the server 
app.listen(3000)

// use morgan middlwares to have logger fun, static file
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))   //this middleware is for accepting form data directly from create.js, so no need of any fetch api 



//listen for request
app.get('/', (req, res) =>{
   res.redirect('/blogs')
})

app.get('/about', (req, res) =>{
  res.render('about', {title: 'About'})
})

//blogs route, note we dont have any static file for blogs, it is using template of index & getting data from database
//blogs routes
app.use( '/blogs', blogRoutes)

// 404
app.use((req, res) =>{
  res.status(400).render('404.ejs', {title: '404'})
})

// .. => comeout of current folder



