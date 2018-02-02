exports.command = 'log'
exports.desc = 'Create a description for log'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`log called for ${argv.dir}`)
}
