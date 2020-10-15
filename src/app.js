const path = require('path')
const express = require('express')

const app = express()

const publicDirPath = path.join(__dirname, '../public') //manipulate the path


app.use(express.static(publicDirPath))







app.get('/weather', (req,res) => {
  res.send({
    forcast: 'cloudy',
    location: 'Sweden'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})