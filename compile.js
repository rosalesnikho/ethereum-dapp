const path = require('path');
const fs = require('fs');
const solidityCompiler = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const inboxSource = fs.readFileSync(inboxPath, 'utf-8')



console.log(solidityCompiler.compile(inboxSource, 1))
module.exports = solidityCompiler.compile(inboxSource, 1).contracts[':Inbox'];