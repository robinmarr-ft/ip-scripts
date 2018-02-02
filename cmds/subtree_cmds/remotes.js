exports.command = 'remotes'
exports.desc = 'Create a description for remotes'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`remotes called for ${argv.dir}`)
}
