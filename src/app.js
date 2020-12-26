const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public') //manipulate the path
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Tay kay'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Odeane'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'let me help',
    name: 'Odeane says so'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'cloudy',
    location: 'Sweden'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})