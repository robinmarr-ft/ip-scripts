exports.command = 'vault'
exports.desc = 'Create a description for vault'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`vault called for ${argv.dir}`)
}
