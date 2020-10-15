const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req,res) => {
  res.send([{
    name: 'Odeane',
    age: 24
  },{ 
      name: 'Ziora',
      age:1
  }])
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.get('/weather', (req,res) => {
  res.send({
    forcast: 'cloudy',
    location: 'Sweden'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})