require('dotenv').config()

const express = require('express')
const app = express();

const errordMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

// middleware
app.use(express.json())

// rootes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products>products route</a>')
})

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () =>{
  try {
    // connectDB
    app.listen(port, console.log(`Server is listening in port ${port}...`))
  } catch (error) {
    
  }
}