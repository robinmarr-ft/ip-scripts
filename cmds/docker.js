exports.command = 'docker'
exports.desc = 'Create a description for docker'
exports.builder = (yargs) => {
  return yargs.commandDir('docker_cmds')
}

exports.handler = (argv) => {
  console.log(`docker called for ${argv.dir}`)
}
