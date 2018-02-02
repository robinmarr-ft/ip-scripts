exports.command = 'exec'
exports.desc = 'Create a description for exec'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`exec called for ${argv.dir}`)
}
