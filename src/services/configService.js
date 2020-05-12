import chalk from 'chalk';
import { prompt } from 'inquirer';
import errorMsg from '../messages/messages';
import fs from 'fs';

const PATH = require('path');
const CWD = process.cwd();

const badge = chalk`${fs.readFileSync(PATH.join(CWD, './badge.txt'))}`;
const pascalCaseRegExp = new RegExp(/^[A-Z]+([a-z][A-Z]*)*$/g);

const questions = [
  {
    type: 'list',
    name: 'component.path',
    message: 'Component family',
    choices: ['components', 'core-components', 'layouts', 'screens', 'wrappers'],
  },
  {
    type: 'input',
    name: 'component.name',
    message: 'ComponentName (PascalCase)?',
    validate: (value) => (pascalCaseRegExp.test(value) ? true : `Insert a PascalCase name.`),
  },
  {
    type: 'input',
    name: 'component.subfolder',
    message: 'Need a subfolder to group it? else leave it empty',
  },
  {
    type: 'list',
    name: 'component.type',
    message: "It's functional or class? (functional is preferred)",
    choices: ['function', 'class'],
  },
  {
    type: 'confirm',
    name: 'component.hasStyle',
    message: 'Do you want to separate Style?',
  },
  {
    type: 'confirm',
    name: 'component.hasLogic',
    message: 'Do you want to separate Logic?',
  },
];

export async function onGenerateConfigs() {
  try {
    console.log(chalk.hex('	#ff00a9')(badge));
    const answers = await prompt(questions);
    return answers;
  } catch (e) {
    console.error(chalk.red.bold(errorMsg.onCreateComponent));
    process.exit(1);
  }
}
