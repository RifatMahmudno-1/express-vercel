const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
	res.send({ Success: true })
})

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
