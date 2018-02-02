exports.command = 'bootstrap'
exports.desc = 'Create a description for bootstrap'
exports.builder = (yargs) => {
  return yargs.commandDir('bootstrap_cmds')
}

exports.handler = (argv) => {
  console.log(`bootstrap called for ${argv.dir}`)
}
