const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const teams = require('./teams.json')

function validatePost(body) {
  if (!body.location || !body.mascot || !body.abbreviation || !body.conference || !body.division) {
    return false
  } else {
    return true
  }
}

app.use(bodyParser.json())

app.post('/teams', (request, respond) => {
  let body = request.body || {}
  let id = teams.length + 1

  if (!validatePost(body)) {
    respond.status(400).send('Please enter the following: location, mascot, abbreviation, conference, division')
  } else {
    let {
      location,
      mascot,
      abbreviation,
      conference,
      division
    } = request.body
    let newTeam = {
      id,
      location,
      mascot,
      abbreviation,
      conference,
      division
    }
    teams.push(newTeam)
    respond.status(201).send(newTeam)
  }

})

app.get('/', (request, response) => {
  response.send('Welcome to my NFL API')
})

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.get('/teams/:filter', (request, response) => {

  var teamRequested = teams.filter((team) => {
    return parseInt(request.params.filter) === team.id || request.params.filter === team.abbreviation
  })

  if (teamRequested.length) {
    response.send(teamRequested)
  } else {
    response.sendStatus(404)
  }

})

app.all('*', (request, response) => {
  response.send('Unclear on your intentions?')
})

app.listen(1337, () => {
  console.log('Server is running!')
})