const router = require('express').Router()

const teams = [
    { name: 'ManU', standing: 'first' },
    { name: 'Liverpool', grade: 'last' },
  ]

  router.get('/', (request, response) => {
    response.json({
      teams: teams,
    })
  })

  ////Get Team Name
  router.get('/:name/', (request, response, next) => {
    const name = request.params.name
      const team = teams.find((x) => x.name === name)
      response.json(team)
    })
  
/////Post Team Name
router.post('/', (request, response) =>{
   teams.push(request.body)
      response.status(201).json({
      message: 'message received!',
      body: request.body,
    })
  })


    module.exports = router