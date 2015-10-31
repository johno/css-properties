import test from 'ava'
import cssProperties from './'

test('returns an array of CSS properties', t => {
  t.plan(1)

  t.true(cssProperties.length >= 177)
})

test('returns an object', t => {
  t.plan(1)

  t.same(typeof cssProperties, 'object')
})
