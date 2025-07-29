const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001 // 5000 can be occupied on Mac

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1.2')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // Server is running on PORT
})