import assert from 'node:assert'
import { describe, it } from 'node:test'
import { client_email, private_key, client_credentials } from '../../lib/gcp/iam.js'

describe('GCP IAM', () => {
  const service_account_email = 'some-service-account@iam.gserviceaccount.com'
  const valid_private_key = [
    '-----BEGIN PRIVATE KEY-----',
    'PRIVATE_KEY_HERE',
    '-----END PRIVATE KEY-----'
  ].join('')

  describe('client_email', () => {
    it('can be a service account email', () => {
      const res = client_email.safeParse(service_account_email)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
      assert.equal(res.data, service_account_email)
    })
  })

  describe('private_key', () => {
    it('errors when using a string which is not a private key', () => {
      const res = private_key.safeParse('not a private key')

      assert.notEqual(res.error, undefined)
      assert.equal(res.success, false)
    })

    it('does not error when using a valid private key', () => {
        const res = private_key.safeParse(valid_private_key)
  
        assert.equal(res.error, undefined)
        assert.equal(res.success, true)
      })
  })

  describe('client_credentials', () => {
    it('does not error when using valid credentials', () => {


      const data = {
        client_email: service_account_email,
        private_key: valid_private_key
    }

      const res = client_credentials.safeParse(data)

      assert.equal(res.error, undefined)
      assert.equal(res.success, true)
      assert.equal(res.data.client_email, data.client_email)
      assert.equal(res.data.private_key, data.private_key)
    })
  })
})
