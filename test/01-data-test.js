var test = require('tape')
var data = require('@begin-functions/data')

test('env', t=> {
  t.plan(1)
  t.ok(data, 'data')
})

/** 
 * working with one document
 *
 * - set
 * - get
 * - del
 */

test('data.set one document', t=> {
  t.plan(1)
  data.set({
    ns: 'tasks',
    key: 'task1',
  }, 
  function done(err, result) {
    t.ok(result.key === 'task1', 'saved document') 
    console.log(result)
  })
})

test('data.get one document', t=> {
  t.plan(1)
  data.get({
    ns: 'tasks',
    key: 'task1',
  }, 
  function done(err, result) {
    t.ok(result.key === 'task1', 'saved document') 
    console.log(result)
  })
})

test('data.del one document', t=> {
  t.plan(1)
  data.del({
    ns: 'tasks',
    key: 'task1',
  }, 
  function done(err, result) {
    t.ok(result.deleted, 'deleted document') 
    console.log(result)
  })
})

/**
 * if no key is supplied one is created
 */
test('data.set generates a unique key if one is not supplied', t=> {
  t.plan(1)
  data.set({
    ns: 'tasks',
  }, 
  function done(err, result) {
    t.ok(result.key, 'saved document has a key') 
    console.log(result)
  })
})

/**
 * Any metadata is fine
 */
test('data.set allows for any JSON document; only ns and key are reserved', t=> {
  t.plan(1)
  data.set({
    ns: 'tasks',
    message: 'hello world',
    complete: false,
    timeframe: new Date(Date.now()).toISOString()
  }, 
  function done(err, result) {
    t.ok(result.key, 'saved document is rich') 
    console.log(result)
  })
})

/**
 * Save a batch of documents by passing an array
 */
test('data.set accepts an array to batch save documents', t=> {
  t.plan(1)
  data.set([{
    ns: 'tasks',
    message: 'catch sunshine every day',
    complete: true,
    timeframe: new Date(Date.now()).toISOString()
  },
  {
    ns: 'tasks',
    message: 'leave the phone at home on accident purpose',
    complete: false,
    timeframe: new Date(Date.now()).toISOString()
  },
  {
    ns: 'tasks',
    message: 'walk the seawall',
    complete: false,
    timeframe: new Date(Date.now()).toISOString()
  
  }], 
  function done(err, result) {
    t.ok(result.docs.length, 'saved batch') 
    console.log(result)
  })
})

test('data.get can read an entire namespace', t=> {
  t.plan(1)
  data.get({
    ns: 'tasks',
  }, 
  function done(err, result) {
    t.ok(result.docs, 'got docs') 
    console.log(result)
  })
})

// TODO document incr, decr, pagination, batchDelete, batchRead
