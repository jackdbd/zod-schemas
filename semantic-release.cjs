/**
 * Configuration for semantic-release.
 */
const {
  changelog,
  commit_analyzer,
  git,
  github,
  npm,
  release_notes_generator
} = require('./semantic-release-plugins.cjs')

const config = {
  // https://semantic-release.gitbook.io/semantic-release/usage/configuration#branches
  branches: ['main', { name: 'canary', prerelease: true }],

  ci: true,

  // each package in this monorepo extends this `plugins` array
  // The git plugin must be called AFTER the npm plugin. See here:
  // https://github.com/semantic-release/git#examples
  // https://semantic-release.gitbook.io/semantic-release/support/faq#why-is-the-package.jsons-version-not-updated-in-my-repository
  plugins: [
    commit_analyzer,
    release_notes_generator,
    changelog,
    npm,
    github,
    git
  ]
}

console.log('=== semantic-release ===', config)

module.exports = config
