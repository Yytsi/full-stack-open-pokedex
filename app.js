const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001 // 5000 can be occupied on Mac

app.use(express.static('dist'))

app.listen(PORT, () => {
  // Server is running on PORT
})
