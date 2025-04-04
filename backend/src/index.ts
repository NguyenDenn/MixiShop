import express from 'express'
const app = express()

const PORT = 5000

const router = express.Router()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/mixi', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        message: 'Hello from mixi with love!'
      }
    ]
  })
})
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
