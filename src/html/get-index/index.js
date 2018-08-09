let begin = require('@architect/functions')

// TODO change defaultHTML
let defaultHTML = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>

    <h1 class="center-text">
      <!-- ↓ Change "Hello world!" to something else and head on back to Begin! -->
      Hello world!
    </h1>

    <p class="center-text">
      Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!
    </p>

  </body>
</html>
`

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    html: defaultHTML
  })
}

exports.handler = begin.html.get(route)
