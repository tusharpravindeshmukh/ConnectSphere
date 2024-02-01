const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// Endpoint Handlers 
app.use('/user', userRoutes)









app.listen(port, () => {
    console.log('Server is live on port ' + port)
})