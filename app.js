const express = require('express')
const { request } = require('http')
const app = express()
const port = 3000


app.use(express.json())

const indexRouter = require('./routes/index.routes.js')
app.use('/', indexRouter)
  
const teamsRouter = require('./routes/teams.routes.js')
app.use('/teams', teamsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  