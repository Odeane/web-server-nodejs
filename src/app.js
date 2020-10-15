const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/help', (req,res) => {
  res.send('help Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/weather', (req,res) => {
  res.send('The weather is swwet')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})