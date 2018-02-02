const { exec } = require('mz/child_process')

exports.command = 'up'
exports.desc = 'Create a description for up'
exports.builder = {}
exports.handler = (argv) => {
  exec('docker-compose', ['up'], {})
  .then(() => {
    console.log('done')
  })
  .catch((err) => {
    console.log('done', err)
  })
}
