exports.command = 'read'
exports.desc = 'Create a description for read'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`read called for ${argv.dir}`)
}
