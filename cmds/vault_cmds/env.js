exports.command = 'env <dir>'
exports.desc = 'Read development enviroment variables for the current module'
exports.builder = {}
exports.handler = (argv) => {
  console.log(`env called for ${process.cwd()}`)
}
