const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const PORT = 3001

mongoose
  .connect('mongodb://my-mongodb:27017/', {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
