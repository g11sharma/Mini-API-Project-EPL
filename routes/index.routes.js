const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({message :'I am sexy and i know it  '})
  })
  router.get('/echo',(request,response)=>{
      response.json({
          url:request.originalUrl,
          querystring:request.query,
          time:new Date(),
      })
  })

  

  module.exports = router