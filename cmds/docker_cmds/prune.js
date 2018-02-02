exports.command = 'prune'
exports.desc = 'Create a description for prune'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`prune called for ${argv.dir}`)
}
