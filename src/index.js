import chalk from 'chalk';

import { generateComponent } from './actions/componentActions';
import { onGenerateConfigs } from './services/configService';

const { Command } = require('commander');
const program = new Command();

export async function interfacePrompt(args) {
  let commandNotFound = true;
  const { component } = await onGenerateConfigs();

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
    console.error(chalk.red('Command not found.'));
    console.log(`Run ${chalk.green('generate-react --help')} to see a list of the commmands you can run.`);
    process.exit(1);
  }
}
