exports.command = 'vault'
exports.desc = 'Create a description for vault'
exports.builder = (yargs) => {
  return yargs.commandDir('vault_cmds')
}

exports.handler = (argv) => {
  console.log(`vault called for ${argv.dir}`)
}
