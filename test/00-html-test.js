var test = require('tape')
var tiny = require('tiny-json-http')
var sandbox = require('@architect/workflows').sandbox

test('env', t=> {
  t.plan(1)
  t.ok(sandbox, 'sandbox')
})

let end
test('sandbox.start', t=> {
  t.plan(1)
  sandbox.start((_end)=> {
    end = _end
    t.ok(true, 'opened')
  })
})

// callback style
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  },
  function win(err, result) {
    if (err) {
      t.fail(err, err)
    }
    else {
      t.ok(true, 'got result')
    }
    console.log(err, result)
  })
})

// promise style
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  }).then(function win(result) {
    t.ok(true, 'got result')
    console.log(result)
  }).catch(function fail(err) {
    t.fail(err, err)
    console.log(err)
  })
})

// async/await style
test('get /', async t=> {
  t.plan(1)
  try {
    var url = 'http://localhost:3333'
    var result = await tiny.get({url})
    t.ok(true, 'got result')
    console.log(result)
  }
  catch(e) {
    t.fail(e, e)
    console.log(e)
  }
})

test('sandbox.end', t=> {
  t.plan(1)
  end()
  t.ok(true, 'closed')
})
