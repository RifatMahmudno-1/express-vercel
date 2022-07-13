const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json({ extended: false }))

let upTime = 0

setInterval(() => {
	upTime += 1
}, 1000)

app.get('/', (req, res) => {
	res.send({ upTime })
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
