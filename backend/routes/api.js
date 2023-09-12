const express = require('express')
const mongoose = require('mongoose')
const app = express() // Create an Express application instance
const cors = require('cors')
app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

const messageSchema = new mongoose.Schema({
  message: String,
})

const messageModel = mongoose.model('message', messageSchema)

app.get('/test', (req, res) => {
  res.send('Hello World!!')
})

app.post('/saveData', async (req, res) => {
  try {
    const newData = new messageModel({ message: req.body.message })
    await newData.save()
    res.status(201).json({ message: 'Data saved successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
