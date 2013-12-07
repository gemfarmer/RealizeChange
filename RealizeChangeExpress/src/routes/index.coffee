console.log("fire index.js")

exports.index = (req, res) ->
  res.render('index', { title: 'Gemfarmer-Express Bootstrap' })
  return