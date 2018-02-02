exports.command = 'git'
exports.desc = 'Create a description for git'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`git called for ${argv.dir}`)
}
