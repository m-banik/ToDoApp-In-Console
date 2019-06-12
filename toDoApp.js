const handleCommand = require("./components/handleCommand");
const colors = require("colors");
const parseArgs = require("minimist");
const command = parseArgs(process.argv);
delete command._;
handleCommand(command);
