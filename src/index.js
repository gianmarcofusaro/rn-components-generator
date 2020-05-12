import chalk from 'chalk';
import { generateComponent } from './actions/componentActions';
import { onGenerateConfigs } from './services/configService';
import msg from './messages/messages';

const { Command } = require('commander');
const program = new Command();

export async function interfacePrompt(args) {
  const { component } = await onGenerateConfigs();

  let commandNotFound = true;
  program
    .version('0.0.1')
    .command('')
    .alias('c')
    .option('-n, --name', '', component.name)
    .option('-p, --path', '', component.path)
    .option('-s, --hasStyle', '', component.hasStyle)
    .option('-l, --hasLogic', '', component.hasLogic)
    .action((cmd) => generateComponent(cmd, component))
    .action(() => (commandNotFound = false));

  program.parse(args);

  if (commandNotFound) {
    console.error(chalk.red(msg.errors.COMMAND_NOT_FOUND));
    process.exit(1);
  }
}
