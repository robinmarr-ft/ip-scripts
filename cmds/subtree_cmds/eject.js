exports.command = 'eject'
exports.desc = 'Create a description for eject'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`eject called for ${argv.dir}`)
}
