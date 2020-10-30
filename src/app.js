const path = require('path')
const express = require('express')

const app = express()

const publicDirPath = path.join(__dirname, '../public') //manipulate the path


app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name:'Odeane'
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