exports.command = 'uneject'
exports.desc = 'Create a description for uneject'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`uneject called for ${argv.dir}`)
}
