const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.static('../'))

// Call the multerImpl and pass in app state to it
require('./src-server/multerImpl')(app)

app.get('/', function (req, res) {
  res.redirect('/upload')
})

module.exports = app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'))
})
