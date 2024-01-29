import assert from 'node:assert'
import { describe, it } from 'node:test'
import {zocker} from 'zocker'
import { chat_id } from '../lib/telegram/index.js'

describe('telegram', () => {
  describe('chat_id', () => {
    it('can be a positive number', () => {
      const data = 12345678
      const res = chat_id.safeParse(data)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
      assert.equal(res.data, data)
    })

    it('can be a negative number', () => {
      const data = -12345678
      const res = chat_id.safeParse(data)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
      assert.equal(res.data, data)
    })

    it('can be a non-empty string', () => {
      const data = '1x2y3z4'
      const res = chat_id.safeParse(data)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
      assert.equal(res.data, data)
    })

    it('cannot be an empty string', () => {
      const data = ''
      const res = chat_id.safeParse(data)

      assert.notEqual(res.error, undefined)
      assert.equal(res.success, false)
    })

    it('does not error with mock data', () => {
      const data = zocker(chat_id).generate();
      const res = chat_id.safeParse(data)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
    })
  })
})
