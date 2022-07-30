import express from 'express'
import config from 'config'
const app = express()

const port = config.get<number>('port')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
