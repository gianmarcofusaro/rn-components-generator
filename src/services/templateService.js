import { existsSync, outputFileSync } from 'fs-extra';
import chalk from 'chalk';
import msg from '../messages/messages';
import replace from 'replace';

export function onGenerateComponent(componentTemplates) {
  for (let i = 0; i < componentTemplates.length; i++) {
    const { template, templateType, componentName, componentPath } = componentTemplates[i];

    if (existsSync(componentPath)) {
      console.error(chalk.red.bold(`${templateType} ${msg.errors.GENERATION_COMPONENT_ALREADY_EXIST} in ${componentPath}`));
    } else {
      try {
        outputFileSync(componentPath, template);
        const replaceDefaultOptions = {
          regex: 'TEMPLATE_NAME',
          replacement: componentName,
          paths: [componentPath],
          recursive: false,
          silent: true,
        };
        replace(replaceDefaultOptions);

        console.log(chalk.green(`${templateType}`), chalk.keyword('orange')(`-->`), chalk.magenta(`${componentPath}`));
      } catch (error) {
        console.error(chalk.red(`${templateType} ${msg.onCreateComponentPartial}`));
      }
    }
  }
}
