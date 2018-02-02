exports.command = 'lerna'
exports.desc = 'Create a description for lerna'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`lerna called for ${argv.dir}`)
}
