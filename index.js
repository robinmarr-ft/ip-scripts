module.exports.ip = (program, pkg) => {
  return program.commandDir('cmds')
    .version(pkg.version)
    .completion()
    .help()
    .argv
}

module.exports.ipp = (program) => {}
module.exports.ips = (program) => {}
