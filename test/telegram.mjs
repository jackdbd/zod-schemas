import assert from 'node:assert'
import { describe, it } from 'node:test'
import { z } from 'zod'
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
  })
})
