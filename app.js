const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001 // 5000 can be occupied on Mac

app.get('/break-prod', (req, res) => {
  global.shouldFailHealthCheck = true
  res.send('Got it, breaking prod :)')
})

app.get('/health', (req, res) => {
  if (global.shouldFailHealthCheck) {
    res.status(500).send('ok')
  } else {
    res.send('ok')
  }
})

app.get('/version', (req, res) => {
  res.send('1.2.6')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // Server is running on PORT
})