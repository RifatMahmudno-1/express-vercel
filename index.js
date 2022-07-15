import { config } from 'dotenv'
await config()
import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const PORT = process.env.PORT || 3000

const client = await new MongoClient(process.env.mongoURL)

app.get('/', async (req, res) => {
	let data = await client.db('test').collection('test').findOne({ _id: 1 })
	res.send({ success: data ? data.test : false })
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
