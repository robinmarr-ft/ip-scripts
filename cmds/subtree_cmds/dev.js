exports.command = 'dev'
exports.desc = 'Create a description for dev'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`dev called for ${argv.dir}`)
}
