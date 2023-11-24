#!/usr/bin/env node

const { Command } = require('commander');
const interpret = require('./interpreter/interpret');
const readSourceCode = require('./io/read-source-code');

const program = new Command();

program
  .name('ofl')
  .description('Object Filter Language')
  .version('0.0.0')
  .command("interpret")
  .description("interpret an .ofl file")
  .argument("<string>", "file to interpret")
  .action(path => {
    const code = readSourceCode(path);
    const result = interpret(code);
    console.log(result);
  });

program.parse();
